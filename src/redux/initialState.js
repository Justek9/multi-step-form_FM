const initialState = {
	step: 3,
	form: {
		isMonthlyPlan: true,
		plan: null,
		personalData: { emailAddress: '', phone: '', name: '' },
		addOns: { onlineService: false, largerStorage: false, customizableProfile: false },
	},
}

export default initialState
