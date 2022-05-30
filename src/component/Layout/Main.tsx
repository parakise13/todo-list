
import TypeIt from "typeit-react";
import MainFlowers from "../UI/MainFlowers";
import classes from "./Main.module.scss";

const Main = () => {
	return (
		<div className={classes['main-page']}>
			<div className={classes.text}>
				<div className={classes.title}>
					<TypeIt options={{
          strings: ["Plan Your Days!"],
          speed: 150,
          waitUntilVisible: true,
        }}></TypeIt>
				</div>
				<div className={classes.content}>
					<TypeIt options={{
          strings: ["lodiofjsod;fjosjf;osdij;fsddj;sof"],
          speed: 50,
						waitUntilVisible: true,
					startDelay: 3000,
        }}></TypeIt>
				</div>
			</div>
			<div className={classes.flowers}>
				<MainFlowers />
			</div>
		</div>
	)
}

export default Main;