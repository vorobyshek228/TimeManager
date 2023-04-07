import styled from 'styled-components'

const Btn = styled.button<{size?: string, align?: string}>`
    width: ${({size}) => size === 'large'? '100px' : size === 'small'? '25px' :  '50px' };
    border-radius: 10%;
    align-self: ${({align})=> align ? align : 'inherit'};
    :hover{
        cursor: pointer;
    }
`
export default Btn