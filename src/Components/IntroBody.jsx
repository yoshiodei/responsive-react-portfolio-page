import introImg from './../Assets/alt_pic_3.png';
import './../Assets/css/IntroBody.css';

const IntroBody = () => {
    return (
        <section className="introBody">
            <div className="introBody__text">
                <p className="introBody__text__name">
                    <span className="introBody__text__span">John </span>
                    <span className="introBody__text__span2">Doe</span>
                </p>
                <p className="introBody__text__title">Frontend Web Developer</p>
                <div className="introBody__text__line"></div>
            </div>
            <img className="introBody__img" alt="picture of John Doe" src={introImg}/>
            <div className="introBody__circle"> </div>       
        </section>
    );
}

export default IntroBody;
