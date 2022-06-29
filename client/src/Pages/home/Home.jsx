// import { AcUnit } from '@material-ui/icons';
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import './home.scss'
import Featured from '../../Components/Featured/Featured'
import heroimage from "../../assets/offset_comp_772626-opt.jpg"
const Home = () => {
 
  return (
    <div className='home'>
      <Navbar />
      <Featured/>

    </div>
  )
}

export default Home;