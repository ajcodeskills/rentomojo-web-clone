import styled from 'styled-components';
export const Container = styled.div`
    
    width: 250;
    height: 150;
    position: relative;
    cursor  : pointer;
    &:hover {
        transform: translate(0, -10px);
        transition: 1s;
    }
`;
