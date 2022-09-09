import React from 'react'
import "./toolbar.css"
import {Search,Person,Chat,Notifications,AccountCircle} from '@mui/icons-material'

export default function Toolbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
          <span className='logo'>INVEST</span>
        </div>
        <div className='topbarCenter'>
           <div className='searchbar'>
              <Search/>
              <input className='searchInput'/>
           </div>
        </div>
        <div className='topbarRight'>
        <div className='topbarIconItem'>
          <Person/>
          <Chat/>
          <Notifications/>
        </div>
        <div>
            <AccountCircle/>
        </div>
        </div>
        </div>
  )
}
