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
                    <PlayArrow className='icon' />
                    <Add className='icon' />
                    <ThumbUpAltOutlined className='icon' />
                    <ThumbDownAltOutlined className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Listitem;