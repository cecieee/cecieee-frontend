import React from 'react'
import styled from 'styled-components';

function Benifit({icon,title,text}) {
    return (
        <Card>
            <Circle>
                <Img src= {"../images/benifits/"+icon+".svg"} alt = {icon}/>
            </Circle>
            <Content>
                <Title>{title}</Title>
                <Text>{text}</Text> 
            </Content>
        </Card>
    )
}

export default Benifit;

const Card = styled.div`
    display:flex;
    flex-direction : column;
    align-items:center;
    justify-content:space-around;
    width : 300px;
    height : auto;
    margin : 70px auto;
    background : #fff;
    box-shadow: 0px 18px 50px rgba(215, 228, 249, 0.5);
    position : relative;

    @media ${(props) => props.theme.breakpoints.sm} {
        margin : 50px auto;
    }
`;

const Circle = styled.div`
    position : absolute;
    top : -32px;
    height: 60px;
    width: 60px;
    background-color:  ${props => props.theme.colors.primary1};
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const Img = styled.img`
    height : 28px;
    width : 28px;
`;

const Content = styled.div`
    padding : 30px 20px;
    display : flex;
    flex-direction : column;
    align-items:center;
    justify-content:space-evenly;
    background : #fff;
    
`;

const Title = styled.h3`
    font-family : Poppins;
    font-weight : 600px;
    font-size : 18px;
    text-align:center;
    margin: 10px 0;
`;

const Text = styled.p`
    font-family : Open Sans;
    font-size : 13px;
    text-align:center;
    margin: 10px 0;
    line-height : 18px;
`;
