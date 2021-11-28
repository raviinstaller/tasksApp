import User from "./User";

export default function Users({ data }) {
  return (
    <div className="accordion" id="accordionExample">
      {data.map((item) => (
        <User key={item.id} data={item} />
      ))}
    </div>
  );
}
