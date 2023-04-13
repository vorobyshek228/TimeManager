import styled from 'styled-components'

const Btn = styled.button<{size?: string, align?: string}>`
    width: ${({size}) => size === 'large'? '100px' : size === 'small'? '25px' :  '50px' };
    border-radius: 0.25em;
    border: 1px solid black;
    background-color: transparent;
    align-self: ${({align})=> align ? align : 'inherit'};
    :hover{
        cursor: pointer;
    }
`
export default Btn