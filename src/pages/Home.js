import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar}from '@material-ui/core'
import Search from '../components/Search'
function Home() {
    return (
        <div className="Home">
            <div className="Home-header">
                <div className="Home-header-left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className="Home-header-right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className="Home-body">
                <img 
                src='https://www.google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif'
                />
                <Search />
            </div>
        </div>
    )
}

export default Home
