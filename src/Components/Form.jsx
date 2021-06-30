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
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Name"/>
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Email"/>
                <label for="message">Message</label>
                <textarea id="message">--Your message--</textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default Form;
