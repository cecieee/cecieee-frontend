import React, { Component } from 'react';
import axios from '../../axios'
import { Container, Card,EventImage, EventName, EventDate,EventMode,Span} from './AchievementStyles';
import { FaRegCalendarAlt} from 'react-icons/fa';

import {FaMapMarkerAlt} from 'react-icons/fa';

export default class Achievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Events: []
        };
    }
    getEventData() {
        axios
            .get(`/achievements`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const events = data.map(u =>
                    <Card key={u.id}>
                    <EventImage src={u.image} />
                    {/* <EventName>{u.name}</EventName> */}
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