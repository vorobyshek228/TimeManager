import styled from "styled-components";

const ModalWrapper = styled.div<{flag:boolean}>`
    display: ${({flag}) => flag ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    background: rgb(10,4,4);
    background: radial-gradient(circle, rgba(10,4,4,0.9136904761904762) 14%, rgba(51,49,49,0.7904411764705882) 100%);
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
`
export default ModalWrapper