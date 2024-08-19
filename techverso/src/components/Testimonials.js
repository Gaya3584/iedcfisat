import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'
import Hero from './Hero'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <u><h2>Events</h2></u>
                <span className='line'></span>
                <h3>Talk Sessions</h3>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 1</span></p>
                        <p>About speaker</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 2</span></p>
                        <p>About speaker</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 3</span></p>
                        <p>About speaker</p>
                    </div> 
                </div>
                <h3>Workshops</h3>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 1</span></p>
                        <p>About speaker</p>
                        <a href="#"><button class="button">Register</button></a>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 2</span></p>
                        <p>About speaker</p>
                        <a href="#"><button class="button">Register</button></a>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Description</p>
                        <p><span>Speaker - 3</span></p>
                        <p>About speaker</p>
                        <a href="#"><button class="button">Register</button></a>
                    </div>
                </div>
                Cultural Event details
            </div>
        </div>
    )
}

export default Testimonials