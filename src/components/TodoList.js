import React, { useContext } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoContext from "../todoContext/contextTodo";

const TodoListWrapper = styled.div`
	max-width: 500px;
	height: 500px;
	margin: 20px auto 0 auto;
	background: cornflowerblue;
	overflow: auto;
`;

const TodoList = ({ onRemove, onUpdate }) => {
	const { state } = useContext(TodoContext);

	return (
		<TodoListWrapper>
			{state.map((v) => (
				<TodoListItem
					key={v.id}
					todo={v}
					onRemove={onRemove}
					onUpdate={onUpdate}
				/>
			))}
		</TodoListWrapper>
	);
};

export default TodoList;
