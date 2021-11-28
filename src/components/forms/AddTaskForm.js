import { useState } from "react";

import { setDoc, doc } from "firebase/firestore";
import db from "../../firebase";

export default function AddTaskForm({ users }) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());
  const newTask = { name, time, isCompleted: false };

  const addTask = async (e) => {
    e.preventDefault();

    if (user !== "0" && name && time) {
      const docRef = doc(db, `users/${user}/tasks`, name);

      await setDoc(docRef, newTask);

      setUser("");
      setTime("");
      setName("");
    }
  };

  return (
    <form method="POST" onSubmit={addTask}>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="0">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.desi})
            </option>
          ))}
        </select>
        <label htmlFor="floatingSelect">Select User</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Task Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="datetime-local"
          className="form-control"
          id="floatingInput"
          placeholder="Name here"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Complition Time</label>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          data-bs-dismiss={user !== "0" && name && time && "modal"}
        >
          Save changes
        </button>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add User
      </button>
    </form>
  );
}
