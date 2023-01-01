import { FirebaseApp } from 'firebase/app';
import { Database, DataSnapshot, getDatabase, onValue, ref } from 'firebase/database';

let db: Database;
export const RealtimeDatabaseInit = (app: FirebaseApp) => {
  db = getDatabase(app);
};

const Subscribe = (topic: string, callback?: any) => {
  const refTopic = ref(db, topic);
  onValue(refTopic, (snapshot: DataSnapshot) => {
    const data = snapshot.val();
    if (callback) {
      callback(data);
    }
  });
};

export default {
  Subscribe,
};
