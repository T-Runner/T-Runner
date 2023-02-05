
import React, { Component } from 'react';
import ItemCard from './itemcard';

class ListItem extends Component {
    render() {
        const { type } = this.props;
        return (
            <div className='flex justify-between'>
                {
                    type.map((item, index) => {
                        return <ItemCard value={item} key={index} />
                    })
                }
            </div>
        )
    }
}

export default ListItem;
