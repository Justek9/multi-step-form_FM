const initialState = {
	step: 1,
	form: {
		isMonthlyPlan: true,
		plan: null,
		personalData: { emailAddress: '', phone: '', name: '' },
		addOns: [
			{ id: 1, title: 'Online services', subtitle: 'Access to multiplayer game', price: 1, isChecked: false },
			{ id: 2, title: 'Larger storage', subtitle: 'Extra 1TB of cloud services', price: 2, isChecked: false },
			{
				id: 3,
				title: 'Customizable profile',
				subtitle: 'Custom theme on your profile',
				price: 2,
				isChecked: false,
			},
		],
	},
}

export default initialState
