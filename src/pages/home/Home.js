import React from 'react'
import Toolbar from '../../component/Toolbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Feed from '../../component/Feed/Feed'
import "./home.css"



export default function Home() {
  return (
    <>
    <Toolbar/>
    <div className='homeContainer'>
        <Sidebar/>
        <Feed/>
    </div>
    </>
  )
}
