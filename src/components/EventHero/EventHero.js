import React, { Component } from 'react';
import axios from '../../axios'
import { Container, Card,EventImage, EventName, EventDate,EventMode,Span} from './EventHeroStyles';
import { FaRegCalendarAlt} from 'react-icons/fa';

import {FaMapMarkerAlt} from 'react-icons/fa';

export default class EventHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Events: []
        };
    }
    getEventData() {
        axios
            .get(`/events`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const events = data.map(u =>
                    <Card>
                    <EventImage src={u.image} />
                    <EventName>{u.name}</EventName>
                    <EventDate><FaRegCalendarAlt size="1em"/><Span>{u.date}</Span></EventDate>
                    <EventMode><FaMapMarkerAlt size="1em"/><Span>{u.mode}</Span></EventMode>
                    </Card>
                    )
                this.setState({events})

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getEventData()
    }

    render() {
        return (
             <Container>
                {this.state.events}
            </Container>
        )
    }
}