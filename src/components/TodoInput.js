import React, { useState, useCallback, useRef } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { EnterOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const InputWrapper = styled.div`
	max-width: 500px;
	margin: 20px auto 0 auto;
`;

const InputStyled = styled(Input)`
	max-width: 500px;
`;

const TodoInput = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const userId = useRef(2);

	const onChangeText = useCallback(
		(e) => {
			setText(e.currentTarget.value);
		},
		[text],
	);

	const onTextSubmit = useCallback(() => {
		dispatch({
			type: "TODO_INPUT",
			data: { text, id: userId.current, checked: false },
		});
		userId.current++;
		setText("");
	}, [text]);

	return (
		<InputWrapper>
			<Form onFinish={() => onTextSubmit()}>
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
