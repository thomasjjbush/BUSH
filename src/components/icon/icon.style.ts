import styled from 'styled-components';
import { IconProps as Props } from '../../types';
export const StyledIcon = styled.i<Props>`
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
	color: ${props => props.color || props.theme.colors.brand};
	font-size: ${props => props.size || 20}px;
	${props => props.onClick && 'cursor: pointer;'}

	[disabled] {
		cursor: not-allowed;
		opacity: 0.7;
	}

  	:after {
		content: "\\${props => props.icon}";
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
  	}
`;
