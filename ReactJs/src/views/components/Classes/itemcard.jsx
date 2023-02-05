import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataPopup, setStatusPopup } from '../../../slices/popupSlice';
import TRunnerLogo from '../Icons/TRunner-logo';

export class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.handlePopup = this.handlePopup.bind(this);
        this.state = {
            detail: {
                name: this.props.value.name,
                coach_name: this.props.value.coach_name,
                date: this.props.value.date,
                time: this.props.value.time,
                duration: this.props.value.duration,
                classId: this.props.value.classId,
                listDetail: this.props.value.detail
            },
        };
    }

    handlePopup() {
        const { setDataPopup, setStatusPopup, value } = this.props;
        setDataPopup({
            name: value.name,
            coach_name: value.coach_name,
            date: value.date,
            time: value.time,
            duration: value.duration,
            classId: value.classId,
            listDetail: value.detail
        });

        setStatusPopup({
            isOpenDetailClass: true,
            isOpenAddChallenge: false
        })
    }

    render() {
        const { value } = this.props
        return (
            <div className='flex w-400 items-center border flex-row flex-wrap shadow-xl gap-1 min-h-250 font-tnr hover:bg-gradient-to-b from-ct4-green-2 to-ct4-green-neon rounded-lg' onClick={this.handlePopup}>
                <div className='mx-2 w-100 h-100 bg-ct4-mossy-green rounded-full'>
                    <div className='ml-2'>
                        <TRunnerLogo />
                    </div>
                </div>
                <div className='w-2/3'>
                    <h1 className='text-xl font-bold mb-4 tracking-tighter' >{value.name || null}</h1>
                    <div className='flex justify-between mb-2 text-base'>
                        <p >Coach Name</p>
                        <p>{value.coach_name || null}</p>
                    </div>
                    <div className='flex justify-between mb-2 text-base'>
                        <p >Date of Class</p>
                        <p>{value.date || null}</p>
                    </div>
                    <div className='flex justify-between mb-2 text-base'>
                        <p >Time of Class</p>
                        <p>{value.time || null}</p>
                    </div>
                    <div className='flex justify-between mb-2 text-base'>
                        <p >Duration of Class</p>
                        <p>{value.duration || null}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popup: state.popup,
});

const mapDispatchToProps = (dispatch) => ({
    setStatusPopup: (payload) => {
        dispatch(setStatusPopup(payload));
    },
    setDataPopup: (payload) => {
        dispatch(setDataPopup(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);