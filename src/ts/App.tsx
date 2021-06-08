import * as React from "react";
import * as ReactDOM from "react-dom";

interface IAppProps
{

}

interface IAppState
{
	
}

export class App extends React.Component<IAppProps, IAppState>
{
	constructor(props: IAppProps)
	{
		super(props);

		this.state = {};
	}

	public override render()
	{
		return (
			<>
				Hello React
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("App"));