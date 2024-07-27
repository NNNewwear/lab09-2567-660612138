import React from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void; // callback function
  toggleDoneTaskFunc: (taskId: string) => void; // callback function
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  // callback function when delete button is clicked
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const doneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed?"line-through":""}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}
