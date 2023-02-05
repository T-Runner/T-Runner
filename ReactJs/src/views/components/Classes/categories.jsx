import React, { Component } from 'react';
export class Categories extends Component {
    constructor(props) {
        super(props);
        this.handleRun = this.handleRun.bind(this);
        this.handleRide = this.handleRide.bind(this);
        this.handleWalk = this.handleWalk.bind(this);
        this.handleHike = this.handleHike.bind(this);
        this.handleDistance = this.handleDistance.bind(this);
    }

    componentDidMount() {
        this.handleRun();
    }


    handleRun() {
        const { classes, fetchRunClassesList } = this.props;
        fetchRunClassesList({ data: classes.run, active: 'run' });
    }

    handleRide() {
        const { classes, fetchRunClassesList } = this.props;

        fetchRunClassesList({ data: classes.ride, active: 'ride' });
    }

    handleWalk() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.walk, active: 'walk' });
    }

    handleHike() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.hike, active: 'hike' });
    }

    handleDistance() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.distance, active: 'distance' });
    }

    render() {
        const { active } = this.props;
        return (
            <div className='flex gap-4 mb-1 items-center font-tnr'>
                <p className='font-bold text-4xl'>Demo Classes</p>
                <div className=' shadow-xl border flex justify-around gap-4 round h-60px'>
                    <button className={`${active === 'run' ? ' bg-ct4-green-neon' : 'bg-white'} flex items-center justify-center gap-1 border border-gray-500 rounded-lg m-2`} onClick={this.handleRun}>
                        <span className='icon-run ml-2'></span>
                        <p className='text-base mr-2 font-bold'>Run</p>
                    </button>
                    <button className={`${active === 'ride' ? 'bg-ct4-green-neon' : 'bg-white'} flex items-center justify-center gap-1 border border-gray-500 rounded-lg m-2`} onClick={this.handleRide}>
                        <span className='icon-ride ml-2'></span>
                        <p className='text-base mr-2 font-bold'>Ride</p>
                    </button>
                    <button className={`${active === 'walk' ? 'bg-ct4-green-neon' : 'bg-white'} flex items-center justify-center gap-1 border border-gray-500 rounded-lg m-2`} onClick={this.handleWalk}>
                        <span className='icon-walk ml-2'></span>
                        <p className='text-base mr-2 font-bold'>Walk</p>
                    </button>
                    <button className={`${active === 'hike' ? 'bg-ct4-green-neon' : 'bg-white'} flex items-center justify-center gap-1 border border-gray-500 rounded-lg m-2`} onClick={this.handleHike}>
                        <span className='icon-hike ml-2'></span>
                        <p className='text-base mr-2 font-bold'>Hike</p>
                    </button>
                    <button className={`${active === 'distance' ? 'bg-ct4-green-neon' : 'bg-white'} flex items-center justify-center gap-1 border border-gray-500 rounded-lg m-2`} onClick={this.handleDistance}>
                        <span className='icon-distance ml-2'></span>
                        <p className='text-base mr-2 font-bold'>Distance</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Categories;