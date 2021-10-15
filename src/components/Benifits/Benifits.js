import React from 'react';
import styled from 'styled-components';
import BlueHorizontal from '../BlueHorizontal';
import Layout from './Layout';
import { Heading1 } from '../../styles/HomeStyles';

function Benifits() {
    return (
        <Container>
            <Heading1>Why IEEE?</Heading1>
            <BlueHorizontal><div /></BlueHorizontal>
            <Layout />
        </Container>
    )
}

export default Benifits;


const Container = styled.div`
  padding : 100px auto;
  height: auto;
  background: #F6F8FB;
`;
