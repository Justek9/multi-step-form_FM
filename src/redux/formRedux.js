/* selectors */
export const getIsMonthlyPlan = ({ form }) => {
	return form.isMonthlyPlan
}

export const getSelectedPlan = ({ form }) => {
	return form.plan
}

/* action name creator */
const reducerName = 'form'
const createActionName = name => `app/${reducerName}/${name}`

/* action types */
const IS_MONTHLY = createActionName('IS_MONTHLY')
const SELECT_PLAN = createActionName('SELECT_PLAN')

/* action creators */
export const isMonthlyPlan = payload => ({ type: IS_MONTHLY, payload })
export const selectPlan = payload => ({ type: SELECT_PLAN, payload })

/* reducer */
const formReducer = (statePart = {}, action) => {
	switch (action.type) {
		case IS_MONTHLY: {
			return { ...statePart, isMonthlyPlan: action.payload }
		}
		case SELECT_PLAN: {
			return { ...statePart, plan: action.payload }
		}
		default:
			return statePart
	}
}

export default formReducer
