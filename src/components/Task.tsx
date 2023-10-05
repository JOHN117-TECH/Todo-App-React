import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Task: React.FC<{
  title: string;
  content: string;
  onDelete: (title: string) => void;
}> = ({ title, content, onDelete }) => {
  function handleClick() {
    onDelete(title);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Task;
