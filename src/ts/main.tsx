import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("App")!)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// eslint-disable-next-line import/no-unused-modules
export const app = App;
