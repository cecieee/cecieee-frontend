import React from 'react';
import styled from 'styled-components';
import Benifit from './Benifit';

function Layout() {
    return (
        <BenifitsLayout>
            <Benifit icon ="logo-1" title = "IEEE eLearning Library" text = "Online courses enable you to get up to speed quickly on emerging technologies and trends."/>
            <Benifit icon ="logo-2" title = "Free @ieee.org Email" text = "With GoogleApps@IEEE, members gain a robust capability for messaging with access to email, calendar, and contact services from any Internet-connected computer."/>
            <Benifit icon ="logo-3" title = "Scholarships, Grants & Fellowship" text = "IEEE offers a variety of scholarships, grants, and fellowships for IEEE Student members."/>
            <Benifit icon ="logo-4" title = "Student Travel Grant" text = "IEEE offers a number of student travel grants to assist Student members in attending conferences and presenting papers."/>
            <Benifit icon ="logo-5" title = "IEEE Standards" text = "With an active portfolio of nearly 1,300 standards and projects under development, IEEE is a leading developer of industry standards in a broad range of technologies."/>
            <Benifit icon ="logo-6" title = "IEEE Women In Engineering" text = "IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering."/>
        </BenifitsLayout>
    )
}

export default Layout;

const BenifitsLayout = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin : 20px 0;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
    }
`;
