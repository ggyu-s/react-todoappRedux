import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Container = styled.div`
	width: 100%;
	max-width: 700px;
	height: 100%;
	background: #464658;
	margin: auto;
	height: 700px;
	margin-top: 100px;
`;

const AppLayout = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "매일 공부하기!!!!",
			check: false,
		},
		{
			id: 2,
			text: "리액트",
			check: false,
		},
		{
			id: 3,
			text: "자바스크립트",
			check: false,
		},
	]);

	const userId = useRef(4);

	const onTextSubmit = useCallback(
		(v) => {
			setTodos([
				{
					id: userId.current,
					text: v,
					checked: false,
				},
				...todos,
			]);
			userId.current++;
		},
		[todos],
	);

	const onRemove = useCallback(
		(id) => {
			setTodos(todos.filter((v) => v.id !== id));
		},
		[todos],
	);

	const onUpdate = useCallback(
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
	);
	return (
		<Container>
			<header>
				<div
					style={{
						color: "white",
						textAlign: "center",
						fontSize: "30px",
					}}
				>
					Todo App
				</div>
			</header>
			<TodoInput onTextSubmit={onTextSubmit} />
			<TodoList todos={todos} onRemove={onRemove} onUpdate={onUpdate} />
		</Container>
	);
};

export default AppLayout;
