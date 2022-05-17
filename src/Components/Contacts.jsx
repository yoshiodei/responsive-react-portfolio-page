import './../Assets/css/Contacts.css';
import jdImg from './../Assets/alt_pic_1.png';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__heading__div">
                <h3 className="contacts__heading">Where To Find Me</h3>
                <div className="contacts__heading__line"></div>
            </div>  
            <div className="contacts__div">
                <div className="contacts__img__div">
                    <img src={jdImg} alt="john doe" />
                </div>
                <ul className="contact__list">
                    <li className="contact__list__item">
                        <i></i>
                        <a href="#">linkedIn</a>
                    </li>
                    <li className="contact__list__item">
                        <i></i>
                        <a href="#">facebook</a>
                    </li>
                    <li className="contact__list__item">
                        <i></i>
                        <a href="#">twitter</a>
                    </li>
                    <li className="contact__list__item">
                        <i></i>
                        <a href="#">instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contacts;
