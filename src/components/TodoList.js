import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
	max-width: 500px;
	height: 500px;
	margin: 20px auto 0 auto;
	background: cornflowerblue;
	overflow: auto;
`;

const TodoList = () => {
	const { todos } = useSelector((state) => state.todoReducer);
	return (
		<TodoListWrapper>
			{todos.map((v) => (
				<TodoListItem key={v.id} todo={v} />
			))}
		</TodoListWrapper>
	);
};

export default TodoList;
