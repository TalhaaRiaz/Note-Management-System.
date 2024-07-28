import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Note({ id, title, content, onDelete, onUpdate }) {
  const [isEditing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  function handleDelete() {
    onDelete(id);
  }

  function handleUpdate() {
    onUpdate(id, { title: editTitle, content: editContent });
    setEditing(false);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white p-2 rounded-full shadow hover:bg-green-600 transition duration-300"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-700 mb-4">{content}</p>
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition duration-300 mr-2"
          >
            <EditIcon />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 transition duration-300"
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
