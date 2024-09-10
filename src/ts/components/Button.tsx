import type {FunctionComponent, SVGProps} from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
	cursor: pointer;
	border: 1px solid black;
	padding: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
`;

interface IProps {
	readonly label: string;
	readonly onClick: () => void;
	readonly Icon?: FunctionComponent<SVGProps<SVGSVGElement> & {title?: string | undefined}>;
}

export const Button = (props: IProps) => {
	const {label, Icon, onClick} = props;

	return (
		<ButtonStyled onClick={onClick}>
			{label}
			{Icon && <Icon />}
		</ButtonStyled>
	);
};
