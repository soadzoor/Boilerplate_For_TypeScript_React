import {useCallback, useState, useEffect} from "react";
import {Button} from "./components/Button";
import {BrowserUtils} from "./utils/BrowserUtils";
import {KeyboardListener} from "./utils/KeyboardListener";

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const onButtonClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	useEffect(() => {
		const onMouseDown = () => {
			setCount(c => c + 1);
		};
		KeyboardListener.getInstance().signals.down.add(onMouseDown);

		return () => {
			KeyboardListener.getInstance().signals.down.remove(onMouseDown);
		};
	}, [])

	return (
		<div>
			<div>{BrowserUtils.siteUrl}</div>
			Hello React
			<div>{count}</div>
			<Button
				onClick={onButtonClick}
				label="Click me!"
			/>
		</div>
	);
};
