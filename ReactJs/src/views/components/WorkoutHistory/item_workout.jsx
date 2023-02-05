import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ItemWorkout extends Component {
    render() {
        const { value } = this.props
        return (
            <div className='mb-8 p-5 rounded-lg border hover:bg-gray-100'>
                <div className='flex flex-row justify-between pb-3 border-b'>
                    <h1 className='font-bold text-2xl text-gray-700 uppercase leading-7'>
                        {value.date || null}
                    </h1>
                    <div className='flex flex-row items-end'>
                        <Link to='/workout/challenge' className='text-lg font-bold text-right text-ct4-facebook'>
                            View Performance
                        </Link>
                    </div>
                </div>

                <div className='flex flex-row justify-between pt-4'>
                    <div className='uppercase leading-5 text-lg  text-gray-700'>
                        <div className='mb-3'>
                            {value.time || null}
                        </div>
                        <div className='mb-3'>
                            {value.sit || null}
                        </div>
                        <div className='flex flex-row text-lg text-gray-700 italic items-center justify-center'>
                            <span>
                                {value.title || null}
                            </span>
                            <span className='ml-4'>
                                {value.type || null}
                            </span>
                            <div className='flex items-center justify-center ml-12'>
                                <i className='fa-xl fa-brands fa-facebook' />
                                <img className='you' alt='you' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='flex flex-col justify-between items-center mx-4 py-4'>
                            <span className='icon_heartRate'></span>
                            <span className='font-bold text-xl leading-6'>
                                {value.metric.heart || null}
                            </span>
                        </div>
                        <div className='flex flex-col justify-between items-center mx-4 py-4'>
                            <span className='icon_otf'></span>
                            <span className='font-bold text-xl leading-6'>
                                {value.metric.otf || null}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemWorkout;