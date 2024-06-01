"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="p-4">
      <form onSubmit={addTodo} className="mb-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
          className="flex-grow px-4 py-2 border rounded-l-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow mb-2 p-4 rounded-lg flex justify-between items-center"
          >
            <span>{todo}</span>
            <button
              onClick={() => completeTodo(index)}
              className="text-red-500"
            >
              Complete
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
