/* ==========================================================================
   AWS SAP Mastery - Main Application Logic (app.js)
   ========================================================================== */

// 1. 定数とカテゴリの日本語マッピング
const CATEGORY_MAP = {
  all: { name: "全カテゴリ", icon: "🌐" },
  compute: { name: "コンピューティング & コンテナ", icon: "💻" },
  storage: { name: "ストレージ & バックアップ", icon: "💾" },
  database: { name: "データベース", icon: "🗄️" },
  network: { name: "ネットワーク & 配信", icon: "🌐" },
  security: { name: "セキュリティ & ガバナンス", icon: "🛡️" },
  messaging: { name: "メッセージング & 統合", icon: "✉️" },
  analytics: { name: "分析 & ビッグデータ", icon: "📊" },
  migration: { name: "移行 & ハイブリッド", icon: "🚛" }
};

const DOMAINS_MAP = {
  "domain-1": { name: "分野1: 複雑な組織に対応するソリューションの設計", icon: "🏢" },
  "domain-2": { name: "分野2: 新しいソリューションのための設計", icon: "✨" },
  "domain-3": { name: "分野3: 既存のソリューションの継続的な改善", icon: "📈" },
  "domain-4": { name: "分野4: ワークロードの移行とモダナイゼーションの加速", icon: "🚀" }
};

const STORAGE_KEY = "aws_sap_mastery_history";

// 実戦問題と基礎トレーニング用問題のデータ分離
let PRACTICE_QUESTIONS = [];
let BASIC_QUESTIONS = [];

// 2. アプリケーションの状態 (State)
let state = {
  currentQuizSet: [],       // 現在実行中のクイズリスト
  currentIndex: 0,          // 現在の問題インデックス
  selectedAnswers: [],      // ユーザーの回答インデックス履歴 (null, index, または 'skipped')
  currentCategory: null,    // 現在選択されているカテゴリID
  currentDomain: null,      // 現在選択されているドメインID
  isReviewMode: false,      // ブックマークのみの復習モードかどうか
  isSkipMode: false,        // あとで回答のみのモードかどうか
  isDomainMode: false,      // ドメインベースのクイズモードかどうか
  isBasicMode: false,       // 基礎トレーニングモードかどうか
  history: {}               // { questionId: { correct: boolean, bookmarked: boolean, skipped: boolean } }
};

// 3. 初期化処理
document.addEventListener("DOMContentLoaded", () => {
  PRACTICE_QUESTIONS = QUESTIONS.filter(q => q.category !== 'basic');
  BASIC_QUESTIONS = QUESTIONS.filter(q => q.category === 'basic');

  loadHistory();
  renderDashboard();
  updateOverallProgress();
  setupEventListeners();
});

// ローカルストレージから履歴をロード
function loadHistory() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      state.history = JSON.parse(data);
    } catch (e) {
      console.error("履歴データのパースに失敗しました", e);
      state.history = {};
    }
  } else {
    state.history = {};
  }
}

// 履歴データをローカルストレージへ保存
function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
}

// 4. View Transitions を用いた画面遷移ヘルパー
function navigate(updateDOM, direction) {
  // ブラウザが View Transitions をサポートしていない場合、即座にDOMを更新
  if (!document.startViewTransition) {
    updateDOM();
    return;
  }

  // アニメーション方向のタイプを設定して遷移を開始
  const transition = document.startViewTransition({
    update: updateDOM,
    types: [direction] // CSS側で :active-view-transition-type(forward/backward) にマッチ
  });
}

// アクティブなビューを切り替えるDOM更新ロジック
function switchView(viewId) {
  document.querySelectorAll(".app-view").forEach(view => {
    if (view.id === viewId) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. ダッシュボードの描画
function renderDashboard() {
  // 統計データの更新 (実戦問題のみを集計対象とする)
  const totalQuestions = PRACTICE_QUESTIONS.length;
  const practiceHistory = Object.keys(state.history)
    .filter(id => !id.startsWith("basic"))
    .map(id => state.history[id]);
  
  const answeredCount = practiceHistory.filter(h => h.answered).length;
  const correctCount = practiceHistory.filter(h => h.answered && h.correct).length;
  const bookmarkCount = practiceHistory.filter(h => h.bookmarked).length;
  const skipCount = practiceHistory.filter(h => h.skipped).length;

  document.getElementById("stat-answered").textContent = answeredCount;
  document.getElementById("stat-accuracy").textContent = 
    answeredCount > 0 ? `${Math.round((correctCount / answeredCount) * 100)}%` : "0%";
  document.getElementById("stat-bookmarks").textContent = bookmarkCount;
  document.getElementById("stat-skips").textContent = skipCount;

  // ブックマーク数の有無によって復習モードボタンのスタイルを調整
  const reviewBtn = document.getElementById("btn-review-mode");
  if (bookmarkCount > 0) {
    reviewBtn.classList.remove("disabled");
  } else {
    reviewBtn.classList.add("disabled");
  }

  // あとで回答数の有無によってスキップ問題解答ボタンのスタイルを調整
  const skipBtn = document.getElementById("btn-skip-mode");
  if (skipCount > 0) {
    skipBtn.classList.remove("disabled");
  } else {
    skipBtn.classList.add("disabled");
  }

  // 基礎トレーニングカードの描画
  renderBasicCard();

  // カテゴリリストの描画
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  // 各カテゴリごとに進捗を算出
  const categories = Object.keys(CATEGORY_MAP).filter(c => c !== "all");
  
  categories.forEach(catId => {
    const catQuestions = QUESTIONS.filter(q => q.category === catId);
    const catTotal = catQuestions.length;
    
    let catAnswered = 0;
    let catCorrect = 0;

    catQuestions.forEach(q => {
      const qHist = state.history[q.id];
      if (qHist && qHist.answered) {
        catAnswered++;
        if (qHist.correct) catCorrect++;
      }
    });

    const percent = catTotal > 0 ? Math.round((catAnswered / catTotal) * 100) : 0;

    const card = document.createElement("div");
    card.className = "category-card glass-panel";
    card.setAttribute("id", `cat-card-${catId}`);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${CATEGORY_MAP[catId].name} カテゴリ。進捗率 ${percent}%`);
    
    card.innerHTML = `
      <div class="category-card-header">
        <div class="category-icon-wrap">${CATEGORY_MAP[catId].icon}</div>
        <span class="category-badge-pill">${catTotal}問</span>
      </div>
      <h3>${CATEGORY_MAP[catId].name}</h3>
      <div class="category-card-progress">
        <div class="category-progress-info">
          <span>進捗</span>
          <span>${catAnswered} / ${catTotal} (${percent}%)</span>
        </div>
        <div class="category-progress-bar-container">
          <div class="category-progress-bar" style="width: ${percent}%"></div>
        </div>
      </div>
    `;

    // カードクリック時の動作
    card.addEventListener("click", () => startQuiz(catId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startQuiz(catId);
      }
    });

    container.appendChild(card);
  });

  // ドメインリストの描画
  const domainsContainer = document.getElementById("domains-container");
  domainsContainer.innerHTML = "";

  const domains = Object.keys(DOMAINS_MAP);
  domains.forEach(domId => {
    const domQuestions = PRACTICE_QUESTIONS.filter(q => q.domain === domId);
    const domTotal = domQuestions.length;

    let domAnswered = 0;
    let domCorrect = 0;

    domQuestions.forEach(q => {
      const qHist = state.history[q.id];
      if (qHist && qHist.answered) {
        domAnswered++;
        if (qHist.correct) domCorrect++;
      }
    });

    const percent = domTotal > 0 ? Math.round((domAnswered / domTotal) * 100) : 0;

    const card = document.createElement("div");
    card.className = "category-card glass-panel";
    card.setAttribute("id", `dom-card-${domId}`);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${DOMAINS_MAP[domId].name}。進捗率 ${percent}%`);

    card.innerHTML = `
      <div class="category-card-header">
        <div class="category-icon-wrap">${DOMAINS_MAP[domId].icon}</div>
        <span class="category-badge-pill">${domTotal}問</span>
      </div>
      <h3>${DOMAINS_MAP[domId].name}</h3>
      <div class="category-card-progress">
        <div class="category-progress-info">
          <span>進捗</span>
          <span>${domAnswered} / ${domTotal} (${percent}%)</span>
        </div>
        <div class="category-progress-bar-container">
          <div class="category-progress-bar" style="width: ${percent}%"></div>
        </div>
      </div>
    `;

    // カードクリック時の動作
    card.addEventListener("click", () => startDomainQuiz(domId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startDomainQuiz(domId);
      }
    });

    domainsContainer.appendChild(card);
  });
}

// 基礎トレーニングカードの描画
function renderBasicCard() {
  const totalBasic = BASIC_QUESTIONS.length;
  let answeredBasic = 0;
  BASIC_QUESTIONS.forEach(q => {
    const qHist = state.history[q.id];
    if (qHist && qHist.answered) {
      answeredBasic++;
    }
  });
  const percent = totalBasic > 0 ? Math.round((answeredBasic / totalBasic) * 100) : 0;

  const container = document.getElementById("basic-card-container");
  if (!container) return;
  container.innerHTML = `
    <div class="basic-card glass-panel" id="btn-start-basic" tabindex="0" role="button" aria-label="基礎トレーニングを開始。進捗率 ${percent}%">
      <div class="basic-card-main">
        <div class="basic-card-title">
          <span class="basic-icon">🧠</span>
          <span>AWSサービス概要クイズ</span>
        </div>
        <p class="basic-card-desc">SAP試験に出現する主要なAWSサービスの概要や役割を当てる基礎トレーニングです。（全${totalBasic}問）</p>
      </div>
      <div class="basic-card-progress">
        <div class="basic-progress-info">
          <span>進捗率</span>
          <span>${answeredBasic} / ${totalBasic} (${percent}%)</span>
        </div>
        <div class="basic-progress-bar-container">
          <div class="basic-progress-bar" style="width: ${percent}%"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("btn-start-basic").addEventListener("click", startBasicQuiz);
  document.getElementById("btn-start-basic").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      startBasicQuiz();
    }
  });
}

// 基礎トレーニングクイズの開始
function startBasicQuiz() {
  state.isReviewMode = false;
  state.isSkipMode = false;
  state.isDomainMode = false;
  state.isBasicMode = true;
  state.currentCategory = "basic";
  state.currentDomain = null;

  // 基礎クイズをロード
  state.currentQuizSet = BASIC_QUESTIONS;

  // 1回のセッションにつき、問題セットをシャッフル
  state.currentQuizSet = shuffleArray([...state.currentQuizSet]);

  state.currentIndex = 0;
  state.selectedAnswers = new Array(state.currentQuizSet.length).fill(null);

  navigate(() => {
    switchView("view-quiz");
    renderQuestion();
  }, "forward");
}

// 全体の進捗状況表示（ヘッダー部分）の更新
function updateOverallProgress() {
  const total = PRACTICE_QUESTIONS.length;
  const answered = Object.keys(state.history)
    .filter(id => !id.startsWith("basic") && state.history[id].answered).length;
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

  document.getElementById("overall-progress-text").textContent = `${answered} / ${total} (${percent}%)`;
  document.getElementById("overall-progress-bar").style.width = `${percent}%`;
}

// 6. クイズの開始
function startQuiz(categoryId, isReview = false, isSkip = false) {
  state.isReviewMode = isReview;
  state.isSkipMode = isSkip;
  state.isDomainMode = false;
  state.isBasicMode = false;
  state.currentCategory = categoryId;
  state.currentDomain = null;

  if (isReview) {
    // ブックマークに登録されている実戦問題のみを抽出
    state.currentQuizSet = PRACTICE_QUESTIONS.filter(q => state.history[q.id]?.bookmarked);
    if (state.currentQuizSet.length === 0) {
      alert("ブックマークに登録されている問題がありません。");
      return;
    }
  } else if (isSkip) {
    // 「あとで回答」に登録されている実戦問題のみを抽出
    state.currentQuizSet = PRACTICE_QUESTIONS.filter(q => state.history[q.id]?.skipped);
    if (state.currentQuizSet.length === 0) {
      alert("あとで回答に設定された問題はありません。");
      return;
    }
  } else {
    // 指定カテゴリの実戦問題を抽出
    state.currentQuizSet = PRACTICE_QUESTIONS.filter(q => q.category === categoryId);
  }

  // 1回のセッションにつき、問題セットをシャッフル
  state.currentQuizSet = shuffleArray([...state.currentQuizSet]);

  state.currentIndex = 0;
  state.selectedAnswers = new Array(state.currentQuizSet.length).fill(null);

  navigate(() => {
    switchView("view-quiz");
    renderQuestion();
  }, "forward");
}

// ドメイン別のクイズ開始
function startDomainQuiz(domainId) {
  state.isReviewMode = false;
  state.isSkipMode = false;
  state.isDomainMode = true;
  state.isBasicMode = false;
  state.currentCategory = null;
  state.currentDomain = domainId;

  // 指定ドメインの実戦問題を抽出
  state.currentQuizSet = PRACTICE_QUESTIONS.filter(q => q.domain === domainId);

  // 1回のセッションにつき、問題セットをシャッフル
  state.currentQuizSet = shuffleArray([...state.currentQuizSet]);

  state.currentIndex = 0;
  state.selectedAnswers = new Array(state.currentQuizSet.length).fill(null);

  navigate(() => {
    switchView("view-quiz");
    renderQuestion();
  }, "forward");
}

// 配列シャッフルのヘルパー
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 7. クイズ問題の描画
function renderQuestion() {
  const question = state.currentQuizSet[state.currentIndex];
  const total = state.currentQuizSet.length;

  // メタ情報の更新
  const domainBadge = document.getElementById("quiz-domain-badge");
  const categoryBadge = document.getElementById("quiz-category-badge");

  if (question.domain && DOMAINS_MAP[question.domain]) {
    domainBadge.textContent = DOMAINS_MAP[question.domain].name;
    domainBadge.style.display = "";
  } else {
    domainBadge.style.display = "none";
  }

  if (state.isReviewMode) {
    categoryBadge.textContent = "復習モード";
  } else if (state.isSkipMode) {
    categoryBadge.textContent = "あとで回答";
  } else if (state.isBasicMode) {
    categoryBadge.textContent = "基礎トレーニング";
  } else {
    categoryBadge.textContent = CATEGORY_MAP[question.category].name;
  }
  
  document.getElementById("quiz-progress-counter").textContent = `${state.currentIndex + 1} / ${total}`;

  // 直近の回答結果バッジの描画
  const lastResultBadge = document.getElementById("quiz-last-result-badge");
  lastResultBadge.className = "last-result-badge"; // クラスリセット
  const qHist = state.history[question.id];
  if (qHist) {
    if (qHist.skipped) {
      lastResultBadge.textContent = "直近: スキップ";
    } else if (qHist.answered) {
      if (qHist.correct) {
        lastResultBadge.textContent = "直近: 正解";
        lastResultBadge.classList.add("correct");
      } else {
        lastResultBadge.textContent = "直近: 不正解";
        lastResultBadge.classList.add("wrong");
      }
    } else {
      lastResultBadge.textContent = "直近: 未回答";
    }
  } else {
    lastResultBadge.textContent = "直近: 未回答";
  }

  // ブックマーク状態の描画
  const isBookmarked = state.history[question.id]?.bookmarked || false;
  const bookmarkBtn = document.getElementById("btn-bookmark-toggle");
  if (isBookmarked) {
    bookmarkBtn.classList.add("active");
    bookmarkBtn.setAttribute("aria-label", "ブックマークを解除");
  } else {
    bookmarkBtn.classList.remove("active");
    bookmarkBtn.setAttribute("aria-label", "ブックマークに登録");
  }

  // 問題文の挿入
  document.getElementById("quiz-question-text").textContent = question.question;

  // 選択肢の描画
  const optionsContainer = document.getElementById("quiz-options-container");
  optionsContainer.innerHTML = "";

  const savedAnswer = state.selectedAnswers[state.currentIndex];

  question.options.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn glass-panel";
    btn.setAttribute("data-index", index);
    btn.innerHTML = `<span class="option-text">${optText}</span>`;

    // 既に回答済み・スキップ済みの場合のクラス追加
    if (savedAnswer !== null) {
      btn.classList.add("disabled");
      if (savedAnswer !== 'skipped') {
        if (index === question.answerIndex) {
          btn.classList.add("correct");
        } else if (index === savedAnswer) {
          btn.classList.add("wrong");
        }
      }
    } else {
      // 未回答ならクリックリスナーを登録
      btn.addEventListener("click", () => handleAnswerSelect(index));
    }

    optionsContainer.appendChild(btn);
  });

  // 解説ボックスの描画
  const explanationBox = document.getElementById("quiz-explanation-box");
  if (savedAnswer !== null && savedAnswer !== 'skipped') {
    const isCorrect = savedAnswer === question.answerIndex;
    
    // 正誤に応じたデザインクラスの設定
    explanationBox.className = `explanation-box glass-panel ${isCorrect ? 'correct-box' : 'wrong-box'}`;
    document.getElementById("explanation-result-title").textContent = isCorrect ? "正解！" : "不正解...";
    document.getElementById("correct-answer-text").textContent = question.options[question.answerIndex];
    document.getElementById("explanation-content-text").textContent = question.explanation;

    // キーワードバッジの描画
    const kwContainer = document.getElementById("explanation-keywords-container");
    kwContainer.innerHTML = "";
    if (question.keywords && question.keywords.length > 0) {
      question.keywords.forEach(kw => {
        const tag = document.createElement("span");
        tag.className = "keyword-tag";
        tag.textContent = kw;
        kwContainer.appendChild(tag);
      });
    }

    explanationBox.classList.remove("hidden");
  } else {
    explanationBox.classList.add("hidden");
  }

  // 操作ボタンの表示制御
  const prevBtn = document.getElementById("btn-prev-question");
  const nextBtn = document.getElementById("btn-next-question");
  const finishBtn = document.getElementById("btn-finish-quiz");
  const skipBtn = document.getElementById("btn-skip-question");

  prevBtn.disabled = state.currentIndex === 0;

  if (savedAnswer !== null) {
    skipBtn.disabled = true; // 回答・スキップ済みならスキップボタンは無効化
    if (state.currentIndex === total - 1) {
      nextBtn.classList.add("hidden");
      finishBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      nextBtn.disabled = false;
      finishBtn.classList.add("hidden");
    }
  } else {
    skipBtn.disabled = false; // 未回答ならスキップボタンは有効
    nextBtn.classList.remove("hidden");
    nextBtn.disabled = true; // 回答またはスキップするまで「次へ」は進めない
    finishBtn.classList.add("hidden");
  }
}

// 8. 回答選択時の処理
function handleAnswerSelect(selectedIndex) {
  const question = state.currentQuizSet[state.currentIndex];
  state.selectedAnswers[state.currentIndex] = selectedIndex;

  const isCorrect = selectedIndex === question.answerIndex;

  // 履歴情報の更新と保存
  const prevRecord = state.history[question.id] || {};
  state.history[question.id] = {
    ...prevRecord,
    answered: true,
    correct: isCorrect,
    skipped: false // 回答が確定したためスキップフラグを解除
  };
  saveHistory();
  updateOverallProgress();

  // 表示の即時アップデート
  renderQuestion();
}

// 8-2. 「あとで回答」（スキップ）時の処理
function handleSkipQuestion() {
  const question = state.currentQuizSet[state.currentIndex];
  state.selectedAnswers[state.currentIndex] = 'skipped';

  // 履歴情報へスキップ状態を登録
  const prevRecord = state.history[question.id] || {};
  state.history[question.id] = {
    ...prevRecord,
    skipped: true
  };
  saveHistory();
  updateOverallProgress();

  // 表示の即時アップデート
  renderQuestion();
}

// 9. ブックマークのトグル処理
function toggleBookmark() {
  const question = state.currentQuizSet[state.currentIndex];
  if (!question) return;

  const prevRecord = state.history[question.id] || {};
  const newBookmarkState = !prevRecord.bookmarked;

  state.history[question.id] = {
    ...prevRecord,
    bookmarked: newBookmarkState
  };

  saveHistory();
  
  // UIのトグル
  const bookmarkBtn = document.getElementById("btn-bookmark-toggle");
  if (newBookmarkState) {
    bookmarkBtn.classList.add("active");
    bookmarkBtn.setAttribute("aria-label", "ブックマークを解除");
  } else {
    bookmarkBtn.classList.remove("active");
    bookmarkBtn.setAttribute("aria-label", "ブックマークに登録");
  }
}

// 10. クイズ終了と結果画面
function finishQuiz() {
  const total = state.currentQuizSet.length;
  let correctCount = 0;
  let skippedCount = 0;

  state.selectedAnswers.forEach((ans, idx) => {
    if (ans === 'skipped') {
      skippedCount++;
    } else if (ans === state.currentQuizSet[idx].answerIndex) {
      correctCount++;
    }
  });

  const validAnswerTotal = total - skippedCount;
  const accuracyPercent = validAnswerTotal > 0 ? Math.round((correctCount / validAnswerTotal) * 100) : 0;

  // 結果画面の文言セット
  let categoryName = "";
  if (state.isReviewMode) {
    categoryName = "復習モードセッション";
  } else if (state.isSkipMode) {
    categoryName = "あとで回答セッション";
  } else if (state.isBasicMode) {
    categoryName = "基礎トレーニング";
  } else if (state.isDomainMode) {
    categoryName = DOMAINS_MAP[state.currentDomain].name;
  } else {
    categoryName = CATEGORY_MAP[state.currentCategory].name;
  }
  document.getElementById("result-category-name").textContent = categoryName;
  
  // スコア表示（スキップ分を除いた正解率、または単純スコア）
  document.getElementById("result-score-ratio").textContent = `${correctCount} / ${total} (スキップ: ${skippedCount})`;
  document.getElementById("result-accuracy-percent").textContent = `${accuracyPercent}%`;

  // 円形プログレスバー風のスタイル適用（Conic Gradient）
  const radialProgress = document.querySelector(".radial-progress-wrap");
  radialProgress.style.background = `radial-gradient(circle, var(--bg-secondary) 55%, transparent 56%), conic-gradient(var(--aws-orange) ${accuracyPercent * 3.6}deg, var(--bg-tertiary) 0deg)`;

  navigate(() => {
    switchView("view-result");
  }, "forward");
}

// 11. イベントリスナーの設定
function setupEventListeners() {
  // ブックマークトグル
  document.getElementById("btn-bookmark-toggle").addEventListener("click", toggleBookmark);

  // クイズプレイ内のナビゲーション
  document.getElementById("btn-prev-question").addEventListener("click", () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      navigate(renderQuestion, "backward");
    }
  });

  // 「あとで回答」（スキップ）ボタン
  document.getElementById("btn-skip-question").addEventListener("click", handleSkipQuestion);

  document.getElementById("btn-next-question").addEventListener("click", () => {
    if (state.currentIndex < state.currentQuizSet.length - 1) {
      state.currentIndex++;
      navigate(renderQuestion, "forward");
    }
  });

  document.getElementById("btn-finish-quiz").addEventListener("click", finishQuiz);

  // 終了してダッシュボードに戻る (確認警告は表示しない)
  document.getElementById("btn-quit-quiz").addEventListener("click", () => {
    navigate(() => {
      renderDashboard();
      switchView("view-dashboard");
    }, "backward");
  });

  // ヘッダーのロゴクリックでダッシュボードに戻る
  const logoBtn = document.getElementById("header-logo-btn");
  if (logoBtn) {
    logoBtn.addEventListener("click", () => {
      navigate(() => {
        renderDashboard();
        switchView("view-dashboard");
      }, "backward");
    });
    logoBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(() => {
          renderDashboard();
          switchView("view-dashboard");
        }, "backward");
      }
    });
  }

  // 結果画面からダッシュボードに戻る
  document.getElementById("btn-result-to-dashboard").addEventListener("click", () => {
    navigate(() => {
      renderDashboard();
      switchView("view-dashboard");
    }, "backward");
  });

  // お気に入り復習モードの起動
  document.getElementById("btn-review-mode").addEventListener("click", () => {
    const bookmarkCount = Object.keys(state.history)
      .filter(id => !id.startsWith("basic") && state.history[id].bookmarked).length;
    if (bookmarkCount > 0) {
      startQuiz("all", true);
    }
  });

  // あとで回答モードの起動
  document.getElementById("btn-skip-mode").addEventListener("click", () => {
    const skipCount = Object.keys(state.history)
      .filter(id => !id.startsWith("basic") && state.history[id].skipped).length;
    if (skipCount > 0) {
      startQuiz("all", false, true);
    }
  });

  // 履歴データリセットボタン
  document.getElementById("btn-reset-data").addEventListener("click", () => {
    if (confirm("これまでの学習進捗やブックマークデータをすべて削除して初期化します。よろしいですか？")) {
      localStorage.removeItem(STORAGE_KEY);
      state.history = {};
      renderDashboard();
      updateOverallProgress();
    }
  });
}
