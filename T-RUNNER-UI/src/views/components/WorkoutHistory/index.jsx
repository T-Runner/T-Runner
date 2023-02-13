import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemWorkout from './item_workout';
import Header from '../Header';
import './style.css';
import { workout_summary } from '../../../data';

export class WorkoutHistory extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='max-w-1400 m-auto py-4 font-tnr'>
                    <h1 className='text-3xl leading-9 text-center text-gray-500 my-12'>YOUR WORKOUT HISTORY</h1>
                    <div className='max-w-800 m-auto'>
                        {
                            workout_summary.map((item) => {
                                return <ItemWorkout value={item} key={uuidv4()} />;
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default WorkoutHistory;