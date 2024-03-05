const initialState = {
	step: 1,
	form: {
		isMonthlyPlan: true,
		plan: null,
		personalData: { emailAddress: undefined, phone: undefined, name: undefined },
		addOns: { onlineService: false, largerStorage: false, customizableProfile: false },
	},
}

export default initialState
