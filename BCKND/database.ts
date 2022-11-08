import { Collection, Db, MongoClient } from "mongodb";
import config from "./config";

// Global variables

export const collections: {
  users?: Collection;
  clubs?: Collection;
} = {};

// Initialize connection

export const connectToDatabase = async () => {
  const username = config.db.username;
  const password = config.db.password;
  const cluster = config.db.clusterName;
  const database = config.db.dbName;
  const usersCollectionName = config.db.playerCollectionName;
  const clubsCollectionName = config.db.clubsCollectionName;

  const uri = `mongodb+srv://${username}:${password}@${cluster}.nvj3jfl.mongodb.net/${database}?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  await client.connect();

  const db: Db = client.db(database);

  collections.users = db.collection(usersCollectionName);
  collections.clubs = db.collection(clubsCollectionName);
};
