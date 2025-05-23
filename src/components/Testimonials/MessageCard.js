import React from 'react';
import { Card,Quotes,Paragraph,Container,Triangle,CircleAvatar,AvatarDetails,Name,Designation} from './MessageCardStyles';
import { FaQuoteLeft} from 'react-icons/fa';





const MessageCard = ({p,name,designation,img})=>(
        
        
        <Container>
                <Card>
                        <Paragraph>
                        {p}
                        </Paragraph>
                        <Quotes><FaQuoteLeft size="3em" /></Quotes>

                        <Triangle/>
                        <CircleAvatar src={img}/>
                        <AvatarDetails><Name>{name}</Name><Designation>{designation}</Designation></AvatarDetails>
                </Card>
                
        </Container>
    
);

export default MessageCard;