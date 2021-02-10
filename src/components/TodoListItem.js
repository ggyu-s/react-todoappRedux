import React, { useCallback } from "react";
import { Checkbox } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo }) => {
	const dispatch = useDispatch();

	const onRemove = useCallback(() => {
		dispatch({ type: "TODO_REMOVE", id: todo.id });
	}, [todo]);

	const onUpdate = useCallback(() => {
		dispatch({ type: "TODO_UPDATE", id: todo.id });
	}, [todo]);

	return (
		<div style={{ padding: "4px 11px", display: "flex", fontSize: "20px" }}>
			<Checkbox
				style={
					todo.checked
						? { textDecoration: "line-through", fontSize: "20px" }
						: { fontSize: "20px" }
				}
				onChange={onUpdate}
			>
				{todo.text}
			</Checkbox>
			<div style={{ marginLeft: "auto" }}>
				<AppleOutlined onClick={onRemove} />
			</div>
		</div>
	);
};
TodoListItem.prototypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoListItem;
