import React from "react";

import TaskList from "./Components/TaskList";
import Filters from "./Components/Filters";

export default function App() {
  return (
    <div>
      <TaskList />
      <Filters />
    </div>
  );
}
