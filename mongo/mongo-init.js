db = db.getSiblingDB('tkgames');

db.createUser({user: "admin", pwd: "healthassistant", roles: [{role: "readWrite", db: "health"}]});
