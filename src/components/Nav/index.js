import React from 'react';
import './style.css';

const Nav = () => {
    return (
        <div>
            <div className='nav'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='nameHeader'>Jaden Johnson</h1>
                    </div>
                    <hr className='hr' />
                    <div className='col'>
                        <h4 className='navLink1' href='#'>About</h4>
                    </div>
                    <div className='col'>
                        <h4 className='navLink2'>Contact</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;