import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Contact Us</p>
                    <p>Mail : iedcfisat@gmail.com<br/>Gayathri M A : 8714724982<br/>Contact2<br/>Contact3</p>
                    <form>
                        <label>Name</label>
                        <fieldset></fieldset>
                        <label>College</label>
                        <fieldset></fieldset>
                        <label>Contact No.</label>
                        <fieldset></fieldset>
                        <label>Question ? </label>
                        <fieldset></fieldset>
                        <button>Submit</button>
                    </form>
                </div>
                <div className='col-2'>
                    <p>Prevoius events as slide</p>
                </div>
            </div>
        </div>
    )
}

export default Demo