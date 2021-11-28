import AddTaskForm from "./AddTaskForm";

export default function AddTask({ users }) {
  return (
    <>
      <div
        className="modal fade"
        id="addTask"
        tabIndex="-1"
        aria-labelledby="addTaskLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskLabel">
                AddUser
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddTaskForm users={users} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
