import { Avatar, Card } from '@mui/material'
import React from 'react'
import Navbar from '../Common/Navbar'
import "../CSS/Portfolio.css"
import Cards from '../LandingPage/Cards'


function Portfolio() {
    return (
        <><Navbar />
            <section id='profile'>
                <div className="user_profile">
                    <span>Profile</span>
                </div>
                <div className="card shadow">
                    <div className="profile_icon">
                        <Avatar sx={{ ml: "5rem" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div className="profile_name">
                        <h2>Name</h2>
                        <div className="user_bio">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt aperiam asperiores officiis cupiditate quidem est ipsa fugiat nemo eaque?
                        <div className="user_cards">
                        <Cards/>
                        <Cards/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio