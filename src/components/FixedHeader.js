import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import styled from 'styled-components';
const FixedHeader = () =>(
    <Container>
        <TopHeader/>
        <Header/>
    </Container>
);

export default FixedHeader;

export const Container =styled.div`
    width: 100%;
    position:fixed;
    z-index:30;
`;