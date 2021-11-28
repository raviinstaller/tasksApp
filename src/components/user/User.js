import Tasks from "../task/Tasks";

import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase";

export default function User({ data }) {
  const [tasks, setTasks] = useState([]);

  const incompleteTasks = tasks.filter((task) =>
    !task.isCompleted ? task : null
  );

  useEffect(
    () =>
      onSnapshot(collection(db, `users/${data.id}/tasks`), (snapshot) => {
        setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${data.id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${data.id}`}
          aria-expanded="false"
          aria-controls={`collapse${data.id}`}
        >
          <div className="w-100 d-flex justify-content-between me-4">
            <div className="fw-bold">{data.name}</div>
            <div className="badge bg-primary rounded-pill">
              {incompleteTasks.length}
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`collapse${data.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${data.id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <Tasks tasks={incompleteTasks} user={data.id} />
        </div>
      </div>
    </div>
  );
}
