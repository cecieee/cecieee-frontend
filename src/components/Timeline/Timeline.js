import React from 'react';
import { Container,BlueHorizontal, Paragraph,Heading2} from './TimelineStyles';
import DataLine from './DataLine';
const Timeline = () => (
    <Container>
        <Heading2>Timeline</Heading2>
        <BlueHorizontal><div/></BlueHorizontal>
        <Paragraph>A glimpse of all splendid events by IEEE Student Branch of College of Engineering Chengannur.</Paragraph>

        <DataLine year='2020' title="Shylesh S received 'Best Volunteer Award' from IEEE CS Kerala Chapter" />
        <DataLine year='2020' title="Rithu Maria Jose selected as Research Assistance Initiative Lead of IEEE CS Student & Young Professional Activities R10 - India Committee"/>
        <DataLine year='2020' title="Laya Mariam Joseph is selected as the WiE Coordinator of IEEE IA/IE/PELS Jt. Chapter Kerala" />
        <DataLine year='2020' title="Ruben Mathew selected as Student Coordinator of IEEE IA/IE/PELS Jt. Kerala Chapter"/>
        <DataLine year='2020' title="Shylesh S selected as Student Representative of IEEE Kerala Section" />
        <DataLine year='2019' title="Nebic J Johnson of IEEE SB CEC was selected to attend IEEE IAS Annual Meeting 2019, Baltimore, USA"/>

    </Container>
        
    
);

export default Timeline;