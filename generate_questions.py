# -*- coding: utf-8 -*-
import json
from data_compute import QUESTIONS_COMPUTE
from data_storage import QUESTIONS_STORAGE
from data_database import QUESTIONS_DATABASE
from data_network import QUESTIONS_NETWORK
from data_security import QUESTIONS_SECURITY
from data_messaging import QUESTIONS_MESSAGING
from data_analytics import QUESTIONS_ANALYTICS
from data_migration import QUESTIONS_MIGRATION
from data_basic import QUESTIONS_BASIC

all_questions = []
all_questions.extend(QUESTIONS_COMPUTE)
all_questions.extend(QUESTIONS_STORAGE)
all_questions.extend(QUESTIONS_DATABASE)
all_questions.extend(QUESTIONS_NETWORK)
all_questions.extend(QUESTIONS_SECURITY)
all_questions.extend(QUESTIONS_MESSAGING)
all_questions.extend(QUESTIONS_ANALYTICS)
all_questions.extend(QUESTIONS_MIGRATION)
all_questions.extend(QUESTIONS_BASIC)

# Write to questions.js
output_path = "/Users/Nozomi/work/questions.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("// This file is auto-generated. Do not edit manually.\n")
    f.write("const QUESTIONS = ")
    json.dump(all_questions, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {len(all_questions)} questions at {output_path}")
