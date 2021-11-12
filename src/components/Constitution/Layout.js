import React from 'react';
import styled from 'styled-components';
import Laws from './Laws';

function Layout() {
    return (
        <ConstitutionSection>
            <Heading2>IEEE Student Branch Chengannur College of Engineering</Heading2>
            <Heading2>Student Branch Constitution</Heading2>
            <p>These ByLaws may be called the Constitution of IEEE Student Branch College of Engineering Chengannur.</p>
            <Laws />
        </ConstitutionSection>
    )
}

export default Layout;

const ConstitutionSection = styled.div`
    text-align:center;

`;

const Heading2 = styled.h2`
    padding 20px 5px;
    color:#000000;
`;


