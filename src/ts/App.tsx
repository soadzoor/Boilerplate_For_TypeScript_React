import {useCallback, useState, useEffect} from "react";
import {Button} from "./components/Button";
import {BrowserUtils} from "./utils/BrowserUtils";
import {KeyboardListener} from "./utils/KeyboardListener";
import ShareIcon from "./components/svgs/share.svg?react";

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const onButtonClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === KeyboardListener.KEY_ARROW_UP) {
				setCount((c) => c + 1);
			} else if (event.key === KeyboardListener.KEY_ARROW_DOWN) {
				setCount((c) => c - 1);
			}
		};
		KeyboardListener.getInstance().signals.down.add(onKeyDown);

		return () => {
			KeyboardListener.getInstance().signals.down.remove(onKeyDown);
		};
	}, []);

	return (
		<div>
			<div>{BrowserUtils.siteUrl}</div>
			Hello React!!
			<div>{count}</div>
			<Button
				onClick={onButtonClick}
				label="Click me!"
				Icon={ShareIcon}
			/>
		</div>
	);
};
