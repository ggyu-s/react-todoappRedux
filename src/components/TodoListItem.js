import React, { useContext } from "react";
import { Checkbox } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import TodoContext from "../todoContext/contextTodo";

const TodoListItem = ({ todo }) => {
	const { actions } = useContext(TodoContext);

	return (
		<div style={{ padding: "4px 11px", display: "flex", fontSize: "20px" }}>
			<Checkbox
				style={
					todo.checked
						? { textDecoration: "line-through", fontSize: "20px" }
						: { fontSize: "20px" }
				}
				onChange={() => actions.onUpdate(todo.id)}
			>
				{todo.text}
			</Checkbox>
			<div style={{ marginLeft: "auto" }}>
				<AppleOutlined onClick={() => actions.onRemove(todo.id)} />
			</div>
		</div>
	);
};
TodoListItem.prototypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoListItem;
