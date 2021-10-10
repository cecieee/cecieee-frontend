import React from 'react';
import { Card,Quotes,Paragraph,Container,Triangle,CircleAvatar,AvatarDetails,Name,Designation} from './MessageCardStyles';
import { FaQuoteLeft} from 'react-icons/fa';





const MessageCard = ({p1,p2,name1,designation1,name2,designation2,img1,img2})=>(
        
        
        <Container>
                <Card>
                        <Paragraph>
                        {p1}
                        </Paragraph>
                        <Quotes><FaQuoteLeft size="3em" /></Quotes>

                        <Triangle/>
                        <CircleAvatar src={img1}/>
                        <AvatarDetails><Name>{name1}</Name><Designation>{designation1}</Designation></AvatarDetails>
                </Card>

                <Card>
                        <Paragraph>
                        {p2}
                        </Paragraph>
                        <Quotes><FaQuoteLeft size="3em" /></Quotes>

                        <Triangle/>
                        <CircleAvatar src={img2}/>
                        <AvatarDetails><Name>{name2}</Name><Designation>{designation2}</Designation></AvatarDetails>
                </Card>
                
        </Container>
    
);

export default MessageCard;