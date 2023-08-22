import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  MouseEvent,
  FunctionComponent,
} from "react";

interface TodoItemProps {
  text: string;
  remove: (index: number) => void;
  update: (index: number, newText: string) => void;
  index: number;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({
  text,
  remove,
  update,
  index,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [edit]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    update(index, e.target.value);
  };

  const handleBlur = (): void => {
    setEdit(false);
  };

  const handleEditClick = (): void => {
    setEdit(true);
  };

  const handleRemoveClick = (): void => {
    remove(index);
  };

  if (edit) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={handleInputChange}
          onBlur={handleBlur}
          ref={inputRef}
        />
      </li>
    );
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span onClick={handleEditClick}>{text}</span>
      <button className="btn btn-danger btn-sm" onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
