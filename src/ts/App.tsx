import {useCallback, useState} from "react";
import Button from "./components/Button";
import {BrowserUtils} from "./utils/BrowserUtils";

export default function App()
{
	const [count, setCount] = useState<number>(0);

	const onButtonClick = useCallback(() =>
	{
		setCount(count + 1);
	}, [count]);

	return (
		<div>
			<div>
				{BrowserUtils.siteUrl}
			</div>
			Hello React
			<div>{count}</div>
			<Button onClick={onButtonClick} label="Click me!" />
		</div>
	);
}
