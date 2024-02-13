/* selectors */
export const getIsMonthlyPlan = ({ form }) => {
	return form.isMonthlyPlan
}

/* action name creator */
const reducerName = 'form'
const createActionName = name => `app/${reducerName}/${name}`

/* action types */
const IS_MONTHLY = createActionName('IS_MONTHLY')

/* action creators */
export const isMonthlyPlan = payload => ({ type: IS_MONTHLY, payload })

/* reducer */
const formReducer = (statePart = {}, action) => {
	switch (action.type) {
		case IS_MONTHLY: {
			return { ...statePart, isMonthlyPlan: action.payload }
		}
		default:
			return statePart
	}
}

export default formReducer
