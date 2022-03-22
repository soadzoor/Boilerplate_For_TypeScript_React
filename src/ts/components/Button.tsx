import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div({
	cursor: "pointer"
});

interface IProps
{
	label: string;
	onClick: () => void;
}

export default function Button(props: IProps)
{
	return (
		<ButtonStyled onClick={props.onClick}>{props.label}</ButtonStyled>
	);
}

