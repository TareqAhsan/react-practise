import React, { Component } from 'react'
import './profile.css';
export default class Profile extends Component {
    render() {
        return (
            <div className="Container">
                <div className='Bio'>
                    <h3>Md. Tareq</h3>
                    <p>i am an engineer completed my bsc degree</p>
                </div>
                <div className='skills'>
                    <h3>skills:</h3>
                    <ul>
                        <li>java</li>
                        <li>javascript</li>
                        <li>html & css</li>
                    </ul>
                </div>
                <div className="Links">
                    <h3>social Links</h3>
                    <ul>
                        <li><a href="#"> Facebook</a></li>
                        <li><a href="#"> Linkedin</a></li>
                        <li><a href="#"> instagram</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
