import React, { Component } from 'react'
import "./style.css"
import Header from './../Header/index';
import Post from './post';
import { lst_post } from '../../../data';
import { v4 as uuidv4 } from 'uuid';

export class ListPost extends Component {

  render() {
    return (
      <>
        <Header />
        <div className='flex justify-center mt-8'>
          <div className='w-2/5'>
            {
              lst_post.map((item) => {
                return <Post key={uuidv4()} value={item} />
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default ListPost