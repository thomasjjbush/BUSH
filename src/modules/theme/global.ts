import styled, { createGlobalStyle } from 'styled-components';
import { StyledProps } from '../../types';

export const Global = createGlobalStyle<StyledProps>`
    html, body {
        height: 100%;
        margin: 0;
        overflow: hidden;

        #root {
            background-color: ${(props): string => props.theme.colors.background};
            display: flex;
            flex-direction: column;
            height: inherit;
            position: relative;
        }
    }

    * {
        box-sizing: border-box;
        color: ${(props): string => props.theme.colors.text};
        text-decoration: none;
        
        @media not all and (hover: none) {
            &:focus {
                outline: dashed 2px ${(props): string => props.theme.colors.brand};
                outline-offset: 2px;
            }
        } 

        @media (hover: none) {
            &:focus {
                outline: none;
            }
        }
    }

    section {
        flex: 1;
        overflow: inherit;

        &:not(:last-of-type) {
            margin-right: 30px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Anton', sans-serif;
        margin: 0;
    }

    h1 {
        font-size: 45px;

        @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
            font-size: 10vw;
        }
    }

    a, button, input, p, select, table {
        font-family: 'Raleway', sans-serif;
    }

    p {
        
        font-size: 20px;
    }

    @font-face {
        font-family: 'icomoon';
        src: url(https://assets.ctfassets.net/e85zpqq4b2pc/kUqasbyE…NaEeXK/e45c4da93623e96f9c35d2923dd226c7/icons.eot);
        src: url('https://assets.ctfassets.net/e85zpqq4b2pc/kUqasbyE…NaEeXK/e45c4da93623e96f9c35d2923dd226c7/icons.eot?#iefix') format('embedded-opentype'), 
             url(https://assets.ctfassets.net/e85zpqq4b2pc/3QQ5NdjvE2YSOArgeYMEhx/11eae45950e74136401fc1cc2b4509a7/icons.woff) format('woff'), 
             url(https://assets.ctfassets.net/e85zpqq4b2pc/4dcDVFnRJrQrZ8BDiHTd8F/e5ff802efc33a2cc4e1d1879c622327d/icons.ttf) format('truetype'),
             url('https://images.ctfassets.net/e85zpqq4b2pc/5VBXsOEP…lwUccQ/f65bad72e6323950c1959e498ade9e97/icons.svg#icons') format('svg');
      }
`;

export const StyledMain = styled.main<StyledProps<{ max?: number; padding?: number; vertical?: boolean }>>`
    display: flex;
    flex-direction: ${(props): string => (props.vertical ? 'column' : 'auto')};
    flex: 1;
    overflow: hidden;
    padding: ${(props): number => props.padding || 0}px;
    margin: ${(props): string => (props.max ? 'auto' : 'none')};
    max-width: ${(props): string => (props.max ? `${props.max}px` : 'none')};
    width: 100%;

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.tabletPortrait}px) {
        flex-direction: column;
    }
`;
