import styled from "styled-components";

const ModalWrapper = styled.div<{flag:boolean}>`
    display: ${({flag}) => flag ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
`
export default ModalWrapper