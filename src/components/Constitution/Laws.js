import React from 'react';
import styled from 'styled-components';

function Laws() {
    return (
        <Innerdiv>
            <Article>Article I: Name and Purpose</Article>
            <List>
                <li><Sub>Sec. 1.</Sub> Name of the Student Branch is “IEEE Student Branch Chengannur College of Engineering”. Informally known as “IEEE Student Branch College of Engineering Chengannur” or “IEEE SB CEC”.<br /><br />SB Code: 60451</li>
                <li><Sub>Sec. 2.</Sub> The purpose shall be the dissemination of knowledge of the theory and practice of all aspects of Electrical, Electronics, Computer Science and Instrumentation branches of Engineering, as well as the furtherance of the professional development of its members.</li>
                <li><Sub>Sec. 3.</Sub> The organization and operation of the Branch shall be in accordance with the Constitution and Bylaws of the IEEE.</li>
            </List>
            <Article>Article II: Executive Committee (ExCom)</Article>
            <List>
                <li><Sub>Sec. 1.</Sub> The management of the affairs of the Student Branch shall be in the hands of the Executive Committee, consisting of the duly elected officers of the Student Branch. The term of the ExCom is from January to December.</li>
                <li><Sub>Sec. 2.</Sub> The Executive Committee shall be the governing body of the Branch and shall transact all business it deems advisable, including the filling of vacancies in offices, authorization of expenditures, etc.</li>
                <li><Sub>Sec. 3.</Sub> Following members constitute the SB ExCom <br /><br />
                <SubList>
                    <li><Sub>A.</Sub> SB Counselor</li>
                    <li><Sub>B.</Sub>  SB Chairperson</li>
                    <li><Sub>C.</Sub>  SB Vice-Chair</li>
                    <li><Sub>D.</Sub>  SB Secretary</li>
                    <li><Sub>E.</Sub>  SB Joint-Secretary</li>
                    <li><Sub>F.</Sub>  SB Treasurer</li>
                    <li><Sub>G.</Sub>  All Society Advisors, Chairs, Vice-Chairs and Secretaries</li>
                    <li><Sub>H.</Sub>  All Affinity Group Advisors, Chairs, Vice-Chairs and Secretaries</li>
                    <li><Sub>I.</Sub>  Coordinators of all Special Interest Groups</li>
                    <li><Sub>J.</Sub>  Webmaster</li>
                    <li><Sub>K.</Sub>  Electronic Communication Coordinator</li>
                    <li><Sub>L.</Sub>  Membership Development Coordinator</li>
                    <li><Sub>M.</Sub>  LINK Representative</li>
                    <li><Sub>N.</Sub>  Student Branch Mentor</li>
                </SubList>
                </li>
                <li><Sub>Sec. 4.</Sub> The Student Branch ExCom shall hold regular meetings at places and time as decided by the Executive Committee at least once a month.</li>
                <li><Sub>Sec. 5.</Sub> ExCom meetings shall be convened with at least two days prior notice to the ExCom Members.</li>
                <li><Sub>Sec. 6.</Sub> Agenda of the meeting must be conveyed to ExCom members prior to the meeting.</li>
                <li><Sub>Sec. 7.</Sub> Any ExCom member can ask the SB Secretary in writing to include in agenda any specific matter requiring discussion or attention of the ExCom.</li>
                <li><Sub>Sec. 8.</Sub> Discussion on any topic not specified in the agenda of the meeting will be at the discretion of the presiding officer.</li>
                <li><Sub>Sec. 9.</Sub> An ExCom member may be impeached from his/her position <br /><br />
                <SubList>
                    <li><Sub>A.</Sub> Due to his/her absence in four consecutive ExCom meetings without a valid reason.</li>
                    <li><Sub>B.</Sub>  If a member works in a manner derogatory to the post.</li>
                    <li><Sub>C.</Sub>  For impeachment, a notice must be sent to the respective ExCom member and a fair chance must be given to explain themselves before ExCom and if still 2/3rd of the members of the ExCom support impeachment, he/she shall be removed from the post.</li>
                    <li><Sub>D.</Sub>  For impeachment, Counselor and at least two SBC/AG/Society advisors must be present in the meeting.</li>
                    <li><Sub>E.</Sub>  Respective Society/AG advisor must be present in the ExCom meeting to impeach the Society/AG ExCom member.</li>
                    <li><Sub>F.</Sub>  SB Treasurer</li>
                    <li><Sub>G.</Sub>  All Society Advisors, Chairs, Vice-Chairs and Secretaries</li>
                    <li><Sub>H.</Sub>  All Affinity Group Advisors, Chairs, Vice-Chairs and Secretaries</li>
                    <li><Sub>I.</Sub>  Coordinators of all Special Interest Groups</li>
                    <li><Sub>J.</Sub>  Webmaster</li>
                    <li><Sub>K.</Sub>  Electronic Communication Coordinator</li>
                    <li><Sub>L.</Sub>  Membership Development Coordinator</li>
                    <li><Sub>M.</Sub>  LINK Representative</li>
                    <li><Sub>N.</Sub>  Student Branch Mentor</li>
                </SubList>
                </li>
           
            </List>
        </Innerdiv>
    )
}

export default Laws;

const Innerdiv = styled.div`
    padding 0px 40px;
    text-align: left;
`;

const Article = styled.h3`
    color #000000;
    margin:19px 0px;
`;

const List = styled.ul`
    list-style:none;

    li{
        margin-bottom:19px;
        color:#000000;
        font-size:15px;
    }
`;

const SubList = styled.ul`
    list-style:none;
    margin-left:45px;
    li{
        margin-bottom:19px;
        color:#000000;
        font-size:15px;
    }
`;

const Sub = styled.span`
    font-weight : 700;
    color:#000000;
`;