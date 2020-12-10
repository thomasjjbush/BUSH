import styled from 'styled-components';

export const StyledScroller = styled.div`
    align-items: flex-start;
    flex: 1 1 auto;
    overflow: scroll;
    padding: 3px;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }
`;
