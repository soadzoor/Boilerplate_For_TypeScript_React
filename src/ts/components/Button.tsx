import * as React from "react";

interface IProps
{
	label: string;
	onClick: () => void;
}

export default function Button(props: IProps)
{
	return (
		<div onClick={props.onClick}>{props.label}</div>
	);
}