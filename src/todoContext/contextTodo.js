import React, { useState, useRef, useCallback } from "react";

const TodoContext = React.createContext({
	state: "",
	actions: {
		onInsert: () => {},
	},
});

export const TodoProvider = ({ children }) => {
	const userid = useRef(4);

	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "react",
			checked: false,
		},
		{
			id: 2,
			text: "react",
			checked: false,
		},
		{
			id: 3,
			text: "react",
			checked: false,
		},
	]);

	const value = {
		state: todos,
		actions: {
			onInsert: useCallback(
				(v) => {
					setTodos([
						{
							id: userid.current,
							text: v,
							checked: false,
						},
						...todos,
					]);
					userid.current++;
				},
				[todos],
			),
			onRemove: useCallback(
				(id) => {
					setTodos(todos.filter((v) => v.id !== id));
					console.log(todos);
				},
				[todos],
			),
			onUpdate: useCallback(
				(id) => {
					setTodos(
						todos.map((todo) => {
							return todo.id === id
								? { ...todo, checked: !todo.checked }
								: todo;
						}),
					);
				},
				[todos],
			),
		},
	};

	return (
		<TodoContext.Provider value={value}>{children}</TodoContext.Provider>
	);
};

export default TodoContext;
