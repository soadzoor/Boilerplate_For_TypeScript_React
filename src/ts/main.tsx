import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("App")
);

// eslint-disable-next-line import/no-unused-modules
export const app = App;
