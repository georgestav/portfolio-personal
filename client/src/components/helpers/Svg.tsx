import { useEffect, useRef, useState } from "react";
import "./Svg.scss";

function Svg() {
	const svgContainer = useRef(null);
	const [listPoints, setListPoints] = useState([]);

	const drawLines = (
		container: any,
		listPoints: number[] | null,
		setListPoints: any
	) => {
		const genPosition = (): number[] => {
			let pLeft: number = Math.floor(
				Math.random() * (container.clientWidth - 10)
			);
			let pTop: number = Math.floor(
				Math.random() * (container.clientHeight - 10)
			);
			return [pLeft, pTop];
		};

		const genDot = (): number[] => {
			const element: number[] = genPosition();
			return element;
		};

		// const line = () => {
		// 	console.log(listPoints);
		// 	if (!listPoints || listPoints.length < 2) {
		// 		return;
		// 	} else {
		// 		listPoints.forEach((x: any) => {
		// 			const newPoint: any = listPoints[listPoints.length - 1];
		// 			if (x !== newPoint) {
		// 				let svgLine = `<line className="line" x1="${x[0]}" y1="${x[1]}" x2="${newPoint[0]}" y2="${newPoint[1]}"/>`;
		// 				return svgLine;
		// 			}
		// 		});
		// 	}
		// };
		const draw = (): void => {
			const point: number[] = genDot();
			if (!listPoints) return;
			setListPoints((listPoints: number[]): (number | number[])[] => [
				...listPoints,
				point,
			]);
		};

		let timesRun: number = 0;
		let interval = setInterval(function () {
			timesRun++;
			if (timesRun === 15) {
				clearInterval(interval);
			}
			draw();
			// line();
		}, 1000);
	};

	useEffect(() => {
		drawLines(svgContainer.current, listPoints, setListPoints);
	}, []);

	return (
		<div id="svg" className="svg_container" ref={svgContainer}>
			<svg id="svgLines">
				{listPoints.map((listPoint, i) => {
					return (
						<circle
							key={i}
							className="dots"
							cx={listPoint[0]}
							cy={listPoint[1]}
							r="5"
						/>
					);
				})}
			</svg>
		</div>
	);
}

export default Svg;
