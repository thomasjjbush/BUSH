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
	color: ${(props): string => props.color || props.theme.colors.brand};
	font-size: ${(props): number => props.size || 20}px;
	${(props): string => props.onClick && 'cursor: pointer;'}

	[disabled] {
		cursor: not-allowed;
		opacity: 0.7;
	}

  	:after {
		content: "\\${(props): string => props.icon}";
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
  	}
`;
