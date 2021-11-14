import styled from "styled-components";


export const Innerdiv = styled.div`
    padding 0px 60px;
    text-align: left;
    p{
        color #000000;
    }

    li{
        line-height: 1.5;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding 0px 20px;
      }
`;

export const Article = styled.h3`
    color #000000;
    margin:35px 0px;
`;

export const List = styled.ul`
    list-style:none;

    li{
        margin-bottom:19px;
        color:#000000;
        font-size:15px;
    }
`;

export const SubList = styled.ul`
    list-style:none;
    margin-left:45px;
    li{
        margin-bottom:19px;
        color:#000000;
        font-size:15px;
    }
    ul{
        list-style:none;
        margin-left:65px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-left:35px;

        ul{
            list-style:none;
            margin-left:40px;
        }
      }
`;

export const Sub = styled.span`
    font-weight : 700;
    color:#000000;
`;