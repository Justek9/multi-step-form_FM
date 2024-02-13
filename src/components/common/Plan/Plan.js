import { getIsMonthlyPlan } from '../../../redux/formRedux'
import Slider from '../Slider/Slider'

const Plan = ({ src, name, price }) => {
	const isMonthly = useSelector(getIsMonthlyPlan)


	return (
		<div>
			<img src={src}></img>
			<div>
				<h3>{name}</h3>
				<p>${price}/mo</p>
				<Slider />
			</div>
		</div>
	)
}
export default Plan
