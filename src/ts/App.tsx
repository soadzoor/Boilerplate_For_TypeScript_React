import React, {useCallback, useState} from "react";
import Button from "./components/Button";

export default function App()
{
	const [count, setCount] = useState<number>(0);

	const onButtonClick = useCallback(() =>
	{
		setCount(count + 1);
	}, [count]);

	return (
		<div>
			Hello React
			<div>{count}</div>
			<Button onClick={onButtonClick} label="Click me!" />
		</div>
	);
}
