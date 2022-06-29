import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'
import heroimage from "../../assets/offset_comp_772626-opt.jpg"

const featured = ({ type }) => {
  return (
    <div className='featured' >
      {type && (
        <div className="category">
          <span>{type === 'movies' ? "Movies" : "Series"}</span>
         <label className='custom-selector' htmlFor="">
            <select name="genre" id="genre" >
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">crime</option>
              <option value="fantasy">fantasy</option>
              <option value="historical">historical</option>
              <option value="horror">horror</option>
              <option value="romance">romance</option>
              <option value="sci-fi">sci-fi</option>
              <option value="thriller">thriller</option>
              <option value="western">western</option>
              <option value="animation">animation</option>
              <option value="drama">drama</option>
              <option value="documentary">documentary</option>
            </select>
         </label>
          
        </div>
      )}
      <img src={heroimage} alt="" width="100%" />

      <div className="info">
        <img src={heroimage} alt="" />
        <span className='desc' >
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim dolorem illo natus
          similique cupiditate recusandae aperiam velit
          repellat qui. Molestiae, magnam tenetur.
          Repudiandae animi id deleniti iure, tempora
        </span>
        <div className="buttons">
          <button className="play"><PlayArrow />
            <span>Play</span>
          </button>
          <button className="more"><InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default featured