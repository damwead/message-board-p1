// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2witUvj_BOGoXhxeLW9_-ICPpOZZGaIM",
  authDomain: "message-board-p1.firebaseapp.com",
  projectId: "message-board-p1",
  storageBucket: "message-board-p1.appspot.com",
  messagingSenderId: "39407031458",
  appId: "1:39407031458:web:c4d913ec070fcdc50db3fb"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// export const firestore = firebase.firestore();
export const firestore = getFirestore(firebaseApp);
// export const storage = firebase.storage();
export const storage = getStorage(firebaseApp);
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = 'state_changed';


// Helper functions


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  // const usersRef = collection(firestore, 'users');
  // const query = usersRef.where('username', '==', username).limit(1);

  const q = query(
    collection(firestore, 'users'), // ref to "users" collection
    where('username', '==', username),
    limit(1) // gt first hit, only 1 anyway
  )
  const userDoc = ( await getDocs(q) ).docs[0]; // get first element from arr which we need
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}