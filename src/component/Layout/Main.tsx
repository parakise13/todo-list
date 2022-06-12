
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
          strings: [`자신만의 ToDo를 추가하여 관리해보세요. `],
          speed: 50,
						waitUntilVisible: true,
					startDelay: 3000,
        }}></TypeIt>
				</div>
				<div className={classes.content}>
					<TypeIt options={{
          strings: [`추가, 수정, 삭제, 중요 list추가 기능이 있습니다.`],
          speed: 50,
						waitUntilVisible: true,
					startDelay: 5000,
        }}></TypeIt>
				</div>
				<div className={classes.content}>
					<TypeIt options={{
          strings: [`처음 방문하신다면 Log In 후 시작이 가능합니다!`],
          speed: 50,
						waitUntilVisible: true,
					startDelay: 7000,
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