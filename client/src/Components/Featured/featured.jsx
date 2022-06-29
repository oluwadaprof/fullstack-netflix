import { Info, InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import heroimage from "../../assets/offset_comp_772626-opt.jpg"

const featured = () => {
  return (
    <div className='featured' >
      <img src={heroimage} alt="" width="100%" />

      <div className="info">
        <img src={heroimage} alt="" />
        <span className='desc' >
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim dolorem illo natus
          similique cupiditate recusandae aperiam velit
          repellat qui. Molestiae, magnam tenetur.
          Repudiandae animi id deleniti iure, tempora
          dolor. Modi deleniti atque quidem accusamus
          praesentium tempore recusandae impedit, expedita
          voluptatibus vero rerum officiis explicabo quia
          ipsum laborum doloremque asperiores distinctio!
          Ea quas possimus numquam fugit incidunt consectetur ex iste voluptatum vel libero quisquam, sapiente dolorum modi rerum assumenda tempore officia. Itaque earum ut laborum veniam reprehenderit se
          d veritatis nobis. Voluptatum.
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