import { MongoClient } from 'mongodb';

const MONGO_URL = "mongodb://root:qF7iCWC2UKy9AldKwmlzpPWT@polly.iran.liara.ir:32554/my-app?authSource=admin";
const client = new MongoClient(MONGO_URL);
function start_mongo() {
  console.log("Starting Mongo");
  return client.connect();
}
const db = client.db();

export { db as d, start_mongo as s };
//# sourceMappingURL=mongo-n06qetVz.js.map
