import AddUserForm from "./AddUserForm";

export default function AddUser() {
  const sendData = (obj) => {
    console.log(obj);

    localStorage.setItem("users", obj);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
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
              <AddUserForm onSubmit={sendData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
