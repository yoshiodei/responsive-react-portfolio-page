import React from 'react';
import './../Assets/css/Form.css';

const Form = () => {
    return (
        <section className="form">
            <div className="form__heading__div">
                <h3 className="form__heading">Get In Touch</h3>
                <div className="form__heading__line"></div>
            </div>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <textarea>Your message--</textarea>
            </form>
        </section>
    );
}

export default Form;
