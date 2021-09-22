import React from 'react';
import { Card,Quotes,Paragraph,Container} from './MessageCardStyles';
import { FaQuoteLeft} from 'react-icons/fa';
const MessageCard = ()=>(

        <Container>
                <Card>
                        <Paragraph>
                        People talk about job security. No one can give you that. Job security depends on the company. What IEEE can do – and I use the phrase carefully – is offer security. You can be the most valuable engineer by being current in technology and by networking with others. If you take advantage of the products and services that IEEE offers, you will become the most valuable engineer in your organization. And if your job goes away, you’ll have no trouble finding another.
                        </Paragraph>
                        <Quotes><FaQuoteLeft size="3em" /></Quotes>
                </Card>
                
        </Container>
    
);

export default MessageCard;