import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { TodoProvider } from "../todoContext/contextTodo";

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
	return (
		<TodoProvider>
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
				<TodoInput />
				<TodoList />
			</Container>
		</TodoProvider>
	);
};

export default AppLayout;
