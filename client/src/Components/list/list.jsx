import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, {useRef} from 'react'
import './list.scss'
import Listitem from '../listitem/Listitem'

const List = () => {
    const listRef = useRef();

    const handleClick=(direction)=> {
        if(direction=== "left"){

        }

    }
  return (
    <div className='list' >
        <span className="list__title"> Continue to watch
            <div className="wrapper">
                <ArrowBackIosOutlined className='slider__arrow left' onClick={()=>{handleClick("left")}} />
                <div className="container" ref={listRef} >
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                      <Listitem />
                </div>
                  <ArrowForwardIosOutlined className='slider__arrow right' onClick={() => { handleClick("right") }} />
            </div>
        </span>
    </div>
  )
}

export default List;