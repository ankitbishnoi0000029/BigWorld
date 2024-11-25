import React from 'react'
import './Faction.css'
import Range from './Range';
import { Link, NavLink } from 'react-router-dom';
import CameraRearOutlinedIcon from '@mui/icons-material/CameraRearOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GirlOutlinedIcon from '@mui/icons-material/GirlOutlined';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
function FactionFirst() {
    
    return (
                    <div className='cate_outer'>
                        <div>
                            <div className="all-cate-data">
                            <span className='cate_heading mx-3 fs-5 fw-bold'>Category</span>
                            <Link to="Faction" ><nav > <HailRoundedIcon /> Faction </nav></Link>
                            <Link  to="/electronic"><nav > <CameraRearOutlinedIcon color='red' /> Electronics </nav></Link>
                            <NavLink to="/Bags"><nav > <BusinessCenterOutlinedIcon/> Bags </nav></NavLink>
                            <NavLink to="/Footware"><nav > <RollerSkatingOutlinedIcon />Footwar </nav></NavLink>
                            <NavLink to="/Groceries"><nav > <FactCheckRoundedIcon/> Groceries </nav></NavLink>
                            <NavLink to="/beauty"><nav > <GirlOutlinedIcon/> beauty </nav></NavLink>
                            <NavLink  to="/Jewellery"><nav > <DiamondRoundedIcon/> Jewellery </nav></NavLink>
                            </div>
                        </div>
                        <Range></Range>
                    </div>
    )
}
export default FactionFirst