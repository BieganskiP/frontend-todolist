import React from "react";
import useFetchTasks from "../hooks/useFetchTasks";
import AddTask from "./AddTask";

export default function TaskList() {
  const { tasks, loading, error, refetchTasks } = useFetchTasks();

  const handleTaskAdded = () => {
    refetchTasks();
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="mb-2">{task.description}</p>
            <p className="mb-2">Completed: {task.completed ? "Yes" : "No"}</p>
            <p className="mb-2">Deadline: {task.deadline}</p>
            <p className="mb-2">Urgency: {task.urgency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
