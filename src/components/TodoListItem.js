import React from "react";
import { Checkbox } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
	return (
		<div style={{ padding: "4px 11px", display: "flex", fontSize: "20px" }}>
			<Checkbox
				style={
					todo.checked
						? { textDecoration: "line-through", fontSize: "20px" }
						: { fontSize: "20px" }
				}
				onChange={() => onUpdate(todo.id)}
			>
				{todo.text}
			</Checkbox>
			<div style={{ marginLeft: "auto" }}>
				<AppleOutlined onClick={() => onRemove(todo.id)} />
			</div>
		</div>
	);
};

TodoListItem.prototypes = {
	todo: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};

export default TodoListItem;
