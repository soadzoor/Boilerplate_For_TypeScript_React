import React, {useCallback, useState} from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

function App()
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

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("App")
);
