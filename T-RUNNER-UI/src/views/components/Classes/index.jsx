import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRunClassesList } from '../../../slices/classSlice';
import Categories from './categories';
import ListItem from './listItem';

class Classes extends Component {
    render() {
        const { classes, fetchRunClassesList, type, active } = this.props;
        return (
            <div className='flex flex-col gap-4 py-4'>
                <Categories classes={classes} fetchRunClassesList={fetchRunClassesList} active={active} />
                <ListItem type={type} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    classes: state.class.classList,
    type: state.class.type,
    active: state.class.active,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRunClassesList: (payload) => {
        dispatch(fetchRunClassesList(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Classes);