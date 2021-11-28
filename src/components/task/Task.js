import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import db from "../../firebase";

export default function Task({ task, user }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const setComplete = async () => {
    setIsCompleted((prev) => !prev);
    const updatedTask = {
      id: task.id,
      name: task.name,
      time: task.time,
      isCompleted: isCompleted
    };
    const docRef = doc(db, `users/${user}/tasks`, task.id);

    await setDoc(docRef, updatedTask);

    console.log(updatedTask);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="fw-bold w-45">{task.name}</div>
      <div className="text-secondary w-45">
        <i className="bi bi-alarm me-2"></i>
        {new Date(task.time).toLocaleString("en-US", {
          hour12: true,
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </div>
      <div>
        <button className="btn" onClick={setComplete}>
          {task.isCompleted ? (
            <i className="bi bi-check-circle-fill text-primary"></i>
          ) : (
            <i className="bi bi-check-circle"></i>
          )}
        </button>
      </div>
    </li>
  );
}
