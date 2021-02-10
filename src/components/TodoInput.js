import React, { useState, useCallback, useContext } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { EnterOutlined } from "@ant-design/icons";
import TodoContext from "../todoContext/contextTodo";

const InputWrapper = styled.div`
	max-width: 500px;
	margin: 20px auto 0 auto;
`;

const InputStyled = styled(Input)`
	max-width: 500px;
`;

const TodoInput = () => {
	const [text, setText] = useState("");
	const { actions } = useContext(TodoContext);

	const onChangeText = useCallback(
		(e) => {
			setText(e.currentTarget.value);
		},
		[text],
	);

	const onTextSubmit = useCallback(() => {
		actions.onInsert(text);
		setText("");
	}, [text]);

	return (
		<InputWrapper>
			<Form
				onFinish={() => {
					onTextSubmit();
				}}
			>
				<InputStyled
					value={text}
					onChange={onChangeText}
					suffix={<EnterOutlined />}
				/>
			</Form>
		</InputWrapper>
	);
};

export default TodoInput;
