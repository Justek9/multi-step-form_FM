/* selectors */
export const getStep = ({ step }) => {
	return step
}

/* action name creator */
const reducerName = 'step'
const createActionName = name => `app/${reducerName}/${name}`

/* action types */
const INCREMENT_STEP = createActionName('INCREMENT_STEP')
const DECREMENT_STEP = createActionName('DECREMENT_STEP')

/* action creators */
export const incrementStep = () => ({
	type: INCREMENT_STEP,
})

export const decrementStep = () => ({
	type: DECREMENT_STEP,
})

/* reducer */
const stepReducer = (statePart = 1, action) => {
	switch (action.type) {
		case INCREMENT_STEP: {
			return statePart + 1
		}
		case DECREMENT_STEP: {
			return statePart - 1
		}
		default:
			return statePart
	}
}

export default stepReducer
