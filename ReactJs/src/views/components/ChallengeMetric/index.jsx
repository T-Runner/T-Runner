import React, { Component } from 'react';
import ChartComponent from '../Charts/MetricChart';
import './styles.css';

class ChallengeMetric extends Component {
    render() {
        return (
            <div className='max-w-700 m-auto font-tnr'>
                <div className='max-w-full'>
                    <ChartComponent />
                    <h1 className='font-bold leading-7 text-2xl text-center uppercase text-gray-600'>Mintues / Zone</h1>
                </div>
                <div className='max-w-600 m-auto'>
                    <div className='grid grid-cols-2 mt-12'>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='calories'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                3
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>calories</span>
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='splat-point'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                10
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>splat points</span>
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='avg-heart-rate'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                90
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>avg. heart rate</span>
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='heart-rate'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                116
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>max heart rate</span>
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='miles'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                36
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>miles</span>
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='steps'></span>
                            <h1 className='text-5xl leading-4 text-center my-8 font-bold text-gray-700'>
                                20
                                <span className='block text-xl italic uppercase leading-9 my-8 font-normal text-gray-600'>steps</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengeMetric;