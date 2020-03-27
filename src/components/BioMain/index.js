import React, { Component } from 'react';
import './style.css';

class BioMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <h2 id='introName'>Hi, I'm Jaden</h2>
                    <hr/>
                </div>
                <div className='row'>
                    <p class='openText'>I am a Seattle based Product Designer that enjoys solving the tough problems for users.
                    <br /><br />A chain of subtle, yet perfectly timed events has brought me here and although my story into product design is atypical, my past experiences are what shaped me into a curious, well versed designer.</p>
                </div>
            </div>
        )
    }
}

export default BioMain;