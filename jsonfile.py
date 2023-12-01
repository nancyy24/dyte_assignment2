import json
import random
from datetime import datetime, timedelta

def generate_json_entry():
    levels = ["error", "info", "warning"]
    messages = ["Failed to connect to DB", "Request processed successfully", "High CPU Usage detected"]
    resource_ids = [f"server-{i}" for i in range(10000, 11000)]
    parent_resource_ids = [f"server-{i}" for i in range(9000, 10000)]
    commits = [f"{random.randint(0, 9)}{random.randint(0, 9)}{random.randint(0, 9)}{random.randint(0, 9)}{random.randint(0, 9)}"]
    
    entry = {
        "level": random.choice(levels),
        "message": random.choice(messages),
        "resourceId": random.choice(resource_ids),
        "timestamp": (datetime.now() - timedelta(days=random.randint(1, 365))).isoformat() + "Z",
        "traceId": f"{random.choice(['abc', 'def', 'ghi'])}-{random.choice(['xyz', 'uvw', 'jkl'])}-{random.randint(100, 999)}",
        "spanId": f"span-{random.randint(100, 999)}",
        "commit": random.choice(commits),
        "metadata": {
            "parentResourceId": random.choice(parent_resource_ids)
        }
    }
    return entry

# Generate 1000 JSON entries
json_data = [generate_json_entry() for _ in range(1000)]

# Save the data to a file
with open("sample_data.json", "w") as file:
    json.dump(json_data, file, indent=2)

print("JSON data generated and saved to 'sample_data.json'")
