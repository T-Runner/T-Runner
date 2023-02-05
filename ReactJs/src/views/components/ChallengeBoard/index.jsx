import React, { Component } from 'react';
import ChallengeMetric from '../ChallengeMetric';
import BackWorkout from '../ChallengeMetric/BackWorkout';
import Header from '../Header';

class ChallengeBoard extends Component {
    render() {
        return (
            <div>
                <Header />
                <BackWorkout />
                <ChallengeMetric />
            </div>
        )
    }
}

export default ChallengeBoard;