import React from 'react'
import './listitem.scss'
import thumbnail from '../../assets/offset_comp_772626-opt.jpg'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'


const Listitem = () => {
    return (
        <div className='list__item'>
            <img src={thumbnail} alt="" />
            <div className="items_info">
                <div className="icons">
                    <PlayArrow className='icon'/>
                    <Add className='icon'/>
                    <ThumbUpAltOutlined className='icon'/>
                    <ThumbDownAltOutlined className='icon'/>
                </div>
                <div className="item__info-top">
                    <span>1 hour 14 min.</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta numquam
                    repudiandae obcaecati nostrum quibusdam
                    nemo quis assumenda eum pariatur?
                </div>
                <div className="genre">Action</div>
                
            </div>
     
        </div>
    )
}

export default Listitem;