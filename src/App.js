import "./styles.css";
import { useState, useEffect } from "react";
import AllUsers from "./components/user/AllUsers";
import AddUser from "./components/forms/AddUser";

import { onSnapshot, collection } from "firebase/firestore";
import db from "./firebase";
import AddTask from "./components/forms/AddTask";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  return (
    <>
      <AllUsers data={data} />
      <AddUser />
      <AddTask users={data} />
      <button
        type="button"
        className="btn btn-primary absoluteButton"
        data-bs-toggle="modal"
        data-bs-target="#addTask"
      >
        Add Task
      </button>
    </>
  );
}
