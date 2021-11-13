import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../../styles/HomeStyles';
import BlueHorizontal from '../BlueHorizontal';
import Layout from './Layout';

function Constitution() {
    return (
        <Container>
            <Layout/>
        </Container>
    )
}

export default Constitution;

const Container = styled.div`
  height: auto;
  margin:0 2em;
  background: #fff;
  font-family: Open Sans,sans-serif;
`;
