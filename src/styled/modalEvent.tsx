import styled from 'styled-components'

const ModalEvent = styled.div`
    min-width:30%;
    min-height: 320px;
    position: absolute;
    transform:translate(-50%,-50%);
    top: 50%;
    border: 1px solid transparent;
    border-radius: 0.25em;
    padding: 15px;
    left: 50%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    background-color: bisque;
`
export default ModalEvent