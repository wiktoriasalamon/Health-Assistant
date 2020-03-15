db = db.getSiblingDB('health');

db.createUser({user: "admin", pwd: "healthassistant", roles: [{role: "readWrite", db: "health"}]});
