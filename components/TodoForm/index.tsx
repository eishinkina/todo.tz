import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  FunctionComponent,
} from "react";

interface IndexProps {
  addTask: (task: string) => void;
}

const Index: FunctionComponent<IndexProps> = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Новая задача..."
          value={taskInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Index;
