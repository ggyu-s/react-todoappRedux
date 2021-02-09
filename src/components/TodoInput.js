import React, { useState, useCallback } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { EnterOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const InputWrapper = styled.div`
	max-width: 500px;
	margin: 20px auto 0 auto;
`;

const InputStyled = styled(Input)`
	max-width: 500px;
`;

const TodoInput = ({ onTextSubmit }) => {
	const [text, setText] = useState("");

	const onChangeText = useCallback(
		(e) => {
			setText(e.currentTarget.value);
		},
		[text],
	);

	return (
		<InputWrapper>
			<Form
				onFinish={() => {
					onTextSubmit(text);
					setText("");
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

TodoInput.prototypes = {
	onTextSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
