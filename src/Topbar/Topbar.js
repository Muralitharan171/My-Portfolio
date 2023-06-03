import React from 'react';
import './Topbar.css';


function Topbar(){
    return (
        <div>
        <header>
        <div className="logo">
        <a href='https://github.com/Muralitharan171' alt='Ⓜ'>Ⓜ</a>    
        </div>
        <input type="checkbox" id="click"/>
        <label for="click" class="mainicon">
            <div class="menu">
                <i class="bi bi-list"></i>
            </div>
        </label>
        <nav class='top-bar'>
            <a href="/" >Home</a>
            <a href="/About">About</a>
            <a href="/Skills">Skills</a>
            <a href="/Projectss">Projects</a>
            <a href="/Contact">Contact</a>
        </nav>
    </header>
    </div>
    )
}
export default Topbar;