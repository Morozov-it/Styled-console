import React from "react";
import styled from 'styled-components';

// вложенные стили, аналог scss
const StyledLine = styled.div`
    color: ${props => props.color || props.theme.colors.primary};
`
const Line = (props) => {
    return <StyledLine {...props} />
}

export default Line;
