import html from './../Assets/html_logo.png';
import css from './../Assets/css_logo.png';
import js from './../Assets/JS_logo.png';
import bootstrap from './../Assets/Bootstrap_logo.png';
import sass from './../Assets/sass_logo.png';
import react from './../Assets/react_logo.png';
import './../Assets/css/MySkills.css';

const MySkills = () => {
    return (
        <section className="Skills">
            <div className="Skills__heading__div">
                <h3 className="Skills__heading">My Skills</h3>
                <div className="Skills__heading__line"></div>
            </div>
            <div className="Skills__div">
                    <div className="Skills__card__div">
                        <img src={html} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">HTML</a>
                    </div>
                    <div className="Skills__card__div">
                        <img src={css} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">CSS</a>
                    </div>
                    <div className="Skills__card__div">
                        <img src={js} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">Javascript</a>
                    </div>
                    <div className="Skills__card__div">
                        <img src={bootstrap} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">Bootstrap</a>
                    </div>
                    <div className="Skills__card__div">
                        <img src={sass} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">SASS</a>
                    </div>
                    <div className="Skills__card__div">
                        <img src={react} className="Skills__image" alt="my skill image"/>
                        <a href="#" className="Skills__para">React</a>
                    </div>
            </div>    
        </section>
    );
}

export default MySkills;
