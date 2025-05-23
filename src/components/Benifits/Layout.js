import React from 'react';
import styled from 'styled-components';
import Benifit from './Benifit';

function Layout() {
    return (
        <BenifitsLayout>
            <Benifit icon ="logo-1" title = "IEEE eLearning Library" text = "A vast digital library with numerous in- demand courses and research papers."/>
            <Benifit icon ="logo-2" title = "Free @ieee.org Email" text = "With GoogleApps@IEEE, members gain a robust capability for messaging with access to email, calendar, and contact services from any Internet-connected computer."/>
            <Benifit icon ="logo-3" title = "Scholarships, Grants & Fellowship" text = "IEEE offers a variety of scholarships, grants, and fellowships for IEEE Student members."/>
            <Benifit icon ="logo-4" title = "Student Travel Grant" text = "IEEE offers a number of student travel grants to assist student members in attending conferences and paper presentations."/>
            <Benifit icon ="logo-5" title = "IEEE Standards" text = "With an active portfolio of nearly 1,300 standards and projects under development, IEEE is a leading developer of industry standards in a broad range of technologies."/>
            <Benifit icon ="logo-6" title = "Celebrating Women in Science" text = "IEEE Women in Engineering is one of the largest professional organizations dedicated to promoting women in STEM, inspiring women across the world to pursue their interests in the field of science and technology."/>
        </BenifitsLayout>
    )
}

export default Layout;

const BenifitsLayout = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin : 20px 80px;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr 1fr;
        margin : 20px 0px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
        margin : 20px 0px;
    }
`;
