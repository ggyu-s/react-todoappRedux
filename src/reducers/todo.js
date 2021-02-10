export const initialState = {
	todos: [
		{
			id: 1,
			text: "react",
			checked: false,
		},
	],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TODO_INPUT":
			return { ...state, todos: [action.data, ...state.todos] };
		case "TODO_REMOVE":
			console.log(action);
			return {
				...state,
				todos: [...state.todos.filter((v) => v.id !== action.id)],
			};
		case "TODO_UPDATE":
			return {
				...state,
				todos: [
					...state.todos.map((v) => {
						return v.id === action.id
							? { ...v, checked: !v.checked }
							: v;
					}),
				],
			};
		default:
			return state;
	}
};

export default todoReducer;
