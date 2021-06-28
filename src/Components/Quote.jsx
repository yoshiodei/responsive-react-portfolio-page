import React from 'react';
import './../Assets/css/Quote.css';
import vint from './../Assets/vint.png';

const Quote = () => {
    return (
        <section className="quote">
                <div className="quote__div">
                    <div className="quote__line"></div>
                    <div className="quote__text__outer__div">
                    <div className="quote__text__div">
                        <p className="quote__text">
                            Information Flow is what the Internet is about.
                            Information sharing is power.
                            If you don't share your ideas, smart people can't do anything about them, and you'll remain anonymous and powerless.
                        </p>
                        <p className="quote__author">- Vint Cerf</p>
                    </div>   
                    </div>
                    
                </div>
                <img src={vint} className="quote__img" />
        </section>
    );
}

export default Quote;
