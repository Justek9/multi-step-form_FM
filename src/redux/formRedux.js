/* selectors */
export const getIsMonthlyPlan = ({ form }) => {
	return form.isMonthlyPlan
}

export const getSelectedPlan = ({ form }) => {
	return form.plan
}

export const getPersonalData = ({ form }) => {
	return form.personalData
}

export const getAddOns = ({ form }) => {
	return form.addOns
}

/* action name creator */
const reducerName = 'form'
const createActionName = name => `app/${reducerName}/${name}`

/* action types */
const IS_MONTHLY = createActionName('IS_MONTHLY')
const SELECT_PLAN = createActionName('SELECT_PLAN')
const SET_PERSONAL_DATA = createActionName('SET_PERSONAL_DATA')
const SET_ADD_ONS = createActionName('SET_ADD_ONS')

/* action creators */
export const isMonthlyPlan = payload => ({ type: IS_MONTHLY, payload })
export const selectPlan = payload => ({ type: SELECT_PLAN, payload })
export const setPersonalData = payload => ({ type: SET_PERSONAL_DATA, payload })
export const setAddOns = payload => ({ type: SET_ADD_ONS, payload })

/* reducer */
const formReducer = (statePart = {}, action) => {
	switch (action.type) {
		case IS_MONTHLY: {
			return { ...statePart, isMonthlyPlan: action.payload }
		}
		case SELECT_PLAN: {
			return { ...statePart, plan: action.payload }
		}
		case SET_PERSONAL_DATA: {
			return { ...statePart, personalData: action.payload }
		}
		case SET_ADD_ONS: {
			return {
				...statePart,
				addOns: statePart.addOns.map(item =>
					item.title === action.payload.name ? { ...item, isChecked: !item.isChecked } : item
				),
			}
		}
		
		default:
			return statePart
	}
}

export default formReducer
