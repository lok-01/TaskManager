import { useState } from "react";

function TaskList({ tasks, onStatusChange, onDelete, onUpdate }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const saveEdit = async (task) => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
    };
    await onUpdate(task.id, updatedTask);
    cancelEditing();
  };

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {editingTaskId === t.id ? (
            <div className="edit-mode">
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit title"
              />
              <input
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Edit description"
              />
              <div className="actions">
                <button onClick={() => saveEdit(t)}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <strong>{t.title}</strong> — {t.description}
                <br />
                <small>
                  Status:{" "}
                  <span style={{ color: t.completed ? "green" : "orange" }}>
                    {t.completed ? "Completed" : "In Progress"}
                  </span>
                </small>
              </div>

              <div className="actions">
                <button
                  onClick={() => onStatusChange(t.id, !t.completed)}
                  style={{ backgroundColor: t.completed ? "#f39c12" : "#27ae60" }}
                >
                  {t.completed ? "Mark In Progress" : "Mark Completed"}
                </button>
                <button onClick={() => startEditing(t)}>Edit</button>
                <button onClick={() => onDelete(t.id)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
