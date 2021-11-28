import { useState } from "react";

import { setDoc, doc } from "firebase/firestore";
import db from "../../firebase";

export default function AddUserForm({ onSubmit }) {
  const [userName, setUsername] = useState("");
  const [designation, setDesignation] = useState("");
  const user = { name: userName, desi: designation };

  const addUserData = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "users", userName);

    await setDoc(docRef, user);

    onSubmit(user);
    setUsername("");
    setDesignation("");
  };

  return (
    <form method="POST" onSubmit={addUserData}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name here"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Designation here"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Designation</label>
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
          data-bs-dismiss={userName && designation && "modal"}
        >
          Save changes
        </button>
      </div>
    </form>
  );
}
