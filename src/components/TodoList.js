import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
	max-width: 500px;
	height: 500px;
	margin: 20px auto 0 auto;
	background: cornflowerblue;
	overflow: auto;
`;

const TodoList = ({ todos, onRemove, onUpdate }) => {
	return (
		<TodoListWrapper>
			{todos.map((v) => (
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

TodoListWrapper.prototypes = {
	todos: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};

export default TodoList;
