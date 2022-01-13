import React, { useState } from "react";
import styled from 'styled-components';
import Flex from "./flex";
import Line from "./line";
import Button from "./button";

// вложенные стили, аналог scss
const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || props.theme.colors.primary};
    &:focus {
        outline: none;
    }
`

const Console = ({ color, ...props }) => {
    const [chars, setChars] = useState('')
    const [lines, setLines] = useState(['C:/Users/Name>'])

    const onCharSet = (event) => {
        setChars(event.target.value)
    };
    const onKeyPress = (event) => {
        if (event.charCode === 13) {
            setLines([...lines, 'C:/Users/Name>'])//метод push
        }
    };
    const clearConsole = () => {
        setLines(['C:/Users/Name>']);
        setChars('');
    };

    return (
        <Flex>
            <Flex direction={'column'} margin={'0px 5px'}>
                {lines.map((line, index) => 
                    <Line key={index} color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole
                value={chars}
                onChange={onCharSet}
                onKeyPress={onKeyPress}
                color={color}
                {...props} />
            <Button press={clearConsole} outlined align={'flex-end'}>clear</Button>
        </Flex>
    )
}

export default Console;
