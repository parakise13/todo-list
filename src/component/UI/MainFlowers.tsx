import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ReactComponent as Svg1 } from "../../assets/svg1.svg";
import { ReactComponent as Svg2 } from "../../assets/svg2.svg";
import { ReactComponent as Svg3 } from "../../assets/svg3.svg";
import { ReactComponent as Svg4 } from "../../assets/svg4.svg";
import { ReactComponent as Svg5 } from "../../assets/svg5.svg";
import { ReactComponent as Svg6 } from "../../assets/svg6.svg";
import { ReactComponent as Svg7 } from "../../assets/svg7.svg";
import { ReactComponent as Svg8 } from "../../assets/svg8.svg";
import { ReactComponent as Svg9 } from "../../assets/svg9.svg";
import classes from "./MainFlowers.module.scss";

const MainFlowers = () => {
	const boxRef = useRef(null);
	
	useEffect(() => {
			gsap.to(boxRef.current, 1, {transform: 'translateX(200px)', delay: .5, ease: 'ease'})
	}, [])

	
	return (
		<div className={classes['flower-wrapper']}>
			<div className={classes.path}>
				<Svg1 />
			</div>
			<div className={classes.path}>
				<Svg2 />
			</div>
			<div className={classes.path}>
				<Svg3 />
			</div>
			<div className={classes.path}>
				<Svg4 />
			</div>
			<div className={classes.path}>
				<Svg5 />
			</div>
			<div className={classes.path}>
				<Svg6 />
			</div>
			<div className={classes.path}>
				<Svg7 />
			</div>
			<div className={classes.path}>
				<Svg8 />
			</div>
			<div className={classes.path}>
				<Svg9 />
			</div>
		</div>
	)
}

export default MainFlowers;