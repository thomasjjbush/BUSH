import styled from 'styled-components';
import { IconProps as Props } from '../../types';
import { StyledButton } from '../button/button.style';

const shared = (color: string, icon: string, size: number): string => `
	display: flex;
	font-family: 'icomoon' !important;
	speak: never;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: ${color};
	font-size: ${size || 20}px;

	:after {
		content: "\\${icon}";
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
  	}
`;

export const ClickableIcon = styled(StyledButton)<Props>`
    ${(props): string => shared(props.color || props.theme.colors.brand, props.icon, props.size)}
    align-self: auto;
    appearance: none;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.4;
    }
`;

export const Icon = styled.i<Props>`
    ${(props): string => shared(props.color || props.theme.colors.brand, props.icon, props.size)}
`;
