import styled from 'styled-components'

const ModalEvent = styled.div`
    min-width:30%;
    min-height: 400px;
    position: absolute;
    transform:translate(-50%,-50%);
    top: 50%;
    padding: 15px;
    left: 50%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 25px;
    background-color: bisque;
`
export default ModalEvent