import styled from "styled-components";

const ButtonStyled = styled.div({
	cursor: "pointer",
	border: "1px solid black",
});

interface IProps {
	readonly label: string;
	readonly onClick: () => void;
}

export const Button = (props: IProps) => {
	return <ButtonStyled onClick={props.onClick}>{props.label}</ButtonStyled>;
};
