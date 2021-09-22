import { Container, Paragraph,Paragraph2} from './DataLineStyles';
import CircleLine from './CircleLine'
const DataLine = (props)=>(
    <Container>
        <Paragraph>{props.year}</Paragraph><CircleLine/><Paragraph>{props.title}<Paragraph2>{props.desc}</Paragraph2></Paragraph>
        
    </Container>
);

export default DataLine;