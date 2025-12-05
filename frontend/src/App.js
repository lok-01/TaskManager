import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("https://taskmanager-i1of.onrender.com/api/tasks");
    setTasks(res.data);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = async (id, completed) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    const res = await axios.put(`https://taskmanager-i1of.onrender.com/api/tasks/${id}`, {
      ...taskToUpdate,
      completed,
    });
    setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
  };

  const updateTask = async (id, updatedTask) => {
    const res = await axios.put(`https://taskmanager-i1of.onrender.com/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://taskmanager-i1of.onrender.com/api/tasks${id}`);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onStatusChange={updateTaskStatus}
        onDelete={deleteTask}
        onUpdate={updateTask} // <-- added
      />
    </div>
  );
}

export default App;
