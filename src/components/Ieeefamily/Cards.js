import React from 'react';
import styled from "styled-components";
import Card from "./Card.js";

function Cards() {
    return (
        <Layout>
            <Card logo="cs-logo" />
            <Card logo="ras-logo"/>
            <Card logo="ias-logo"/>
            <Card logo="wie-logo"/>
            <Card logo="pes-logo"/>
            <Card logo="ims-logo"/>
            <Card logo="sight-logo"/>
            <Card logo="sscs-logo"/>
        </Layout>
    )
}

export default Cards;

const Layout = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 20px 10px;
    width:100%;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
        margin: 20px 0;
    }
`;


