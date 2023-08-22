import React, { FunctionComponent } from "react";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  tasks: string[];
  removeTask: (index: number) => void;
  updateTask: (index: number, newText: string) => void;
}

const TodoList: FunctionComponent<TodoListProps> = ({
  tasks,
  removeTask,
  updateTask,
}) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          text={task}
          remove={removeTask}
          update={updateTask}
          index={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
