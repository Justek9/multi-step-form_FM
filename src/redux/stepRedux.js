/* selectors */
export const getStep = ({ step }) => {
	return step
}

/* reducer */
const stepReducer = (statePart = 1, action) => {
	switch (action.type) {
		default:
			return statePart
	}
}

export default stepReducer
