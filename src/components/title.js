import React from "react";
import styled from 'styled-components';

// динамические стили
const StyledTitle = styled.h2`
    color: ${props => props.color || props.theme.colors.primary};
`

// const Title = ({children, color}) => {
//     return (
//         <StyledTitle color={color}>
//             {children}
//         </StyledTitle>
//     );
// }

//лаконичная запись через объект props и передача всех его свойств через развертывание
const Title = (props) => {
    return (
        <StyledTitle {...props} />
    );
}

export default Title;
