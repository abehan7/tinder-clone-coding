import { db } from "../db/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { LogBox } from "react-native";
import _ from "lodash";

LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const CommentCollectionRef = collection(db, "chat");

export const getComments = async () => {
  const comments = await getDocs(CommentCollectionRef);
  return comments.docs.map((comment) => {
    console.log(comment.data());
  });
};
