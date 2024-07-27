import React, { useState } from "react";

interface TaskInputProps {
  addTaskFunc: (task: string) => void;
}

export default function TaskInput({ addTaskFunc }: TaskInputProps) {
  const [taskInput, setTaskInput] = useState("");

  const addTaskBtnOnClick = () => {
    addTaskFunc(taskInput);
    setTaskInput("");
  };

  const taskInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const taskInputOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && taskInput !== "") addTaskBtnOnClick();
  };

  return (
    <div className="d-flex gap-1">
      <input
        className="form-control"
        placeholder="Insert a task here.."
        onChange={taskInputOnChange}
        onKeyUp={taskInputOnKeyUp}
        value={taskInput}
      />
      <button className="btn btn-primary" onClick={addTaskBtnOnClick} disabled={taskInput.length == 0}>
        Add
      </button>
    </div>
  );
}
