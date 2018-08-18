const bindActionCreator = (action, dispatch) => (...args) =>
	dispatch(action.call(this, ...args));

const bindActionCreators = (actions, dispatch) => {
	const keys = Object.keys(actions);
	const boundActionCreators = {};

	for (let i = 0; i <= keys.length; i++) {
		const key = keys[i];
		boundActionCreators[key] = bindActionCreator(actions[key], dispatch);
	}

	return boundActionCreators;
};

export default bindActionCreators;