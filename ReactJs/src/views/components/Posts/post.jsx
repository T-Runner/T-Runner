import React, { Component } from 'react'
import ChallengeMetric from '../ChallengeMetric';
import Profile from './profile';

class Post extends Component {

    render() {
        const { value } = this.props
        return (
            <div className='border shadow-2xl mb-8 rounded-xl'>
                <div>
                    <Profile value={value} />
                    <ChallengeMetric />
                </div>
            </div>
        )
    }
}

export default Post