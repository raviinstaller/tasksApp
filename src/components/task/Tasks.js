import Task from "./Task";

export default function Tasks({ tasks, user }) {
  const sortedTasks = tasks.sort((a, b) => new Date(a.time) - new Date(b.time));

  return (
    <ul className="list-group">
      {sortedTasks.map((task) => (
        <Task key={task.id} task={task} user={user} />
      ))}
    </ul>
  );
}
