import { useState } from "react";
import axios from "axios";

const useAddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTask = async (taskData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://to-do-app-patrykb.herokuapp.com/tasks",
        taskData
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { addTask, loading, error };
};

export default useAddTask;
