import styled from 'styled-components';


export const BlueLine = styled.div`
display:flex;
background-color: none;
justify-content: center;
align-items: center;
div {
    width: 2.1em;
    
    height: 6px;
    background-color: ${props => props.theme.colors.primary1};
    border-radius: 3px;}
`;

const BlueHorizontal = ()=>(
    <BlueLine><div /></BlueLine>
);

export default BlueHorizontal;