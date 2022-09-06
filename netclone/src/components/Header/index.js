import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
            <a href="/">
                    <img src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg" alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}