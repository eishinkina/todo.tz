import React, { ChangeEvent, FunctionComponent } from "react";

interface TodoFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const TodoFilter: FunctionComponent<TodoFilterProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="d-flex justify-content-end mb-3">
      <div>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Поле поиска"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default TodoFilter;
