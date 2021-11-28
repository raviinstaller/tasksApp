import Users from "./Users";

export default function AllUsers({ data }) {
  return (
    <>
      <section className="bg-primary text-white py-3 pt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Tasks</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Users data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
