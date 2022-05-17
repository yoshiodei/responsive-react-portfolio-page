import React from 'react';
import './../Assets/css/Form.css';


const Form = () => {
    return (
        <section className="form">
            <div className="form__heading__div">
                <h3 className="form__heading">Get In Touch</h3>
                <div className="form__heading__line"></div>
            </div>
            <form className="form__form">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Name"/>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" placeholder="Email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value="--Your message--"></textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default Form;
