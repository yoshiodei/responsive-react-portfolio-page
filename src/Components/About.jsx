import aboutImg from './../Assets/alt_pic_2.png';
import './../Assets/css/About.css';

const About = () => {
    return (
        <section className="About">
            <div className="About__heading__div">
                <h3 className="About__heading">About Me</h3>
                <div className="About__heading__line"></div>
            </div>
            <div className="About__div">
                <div className="About__inner__div">
                    <div className="About__img__div">
                    <img src={aboutImg} alt="john doe" className="About__img"/>
                    </div>
                </div>
            
            <div className="About__text__div">
                
                <p className="About__para">Like many others, I’m a Frontend developer aspiring to become a Full Stack Web dev.<br/><br/>
Well I can’t boast of several years of experience but for now my works would be doing the talking for me.
Feel free to scroll down to my projects. <br/><br/>
Hopefully you would find my works amazing or might not meet your expectations much.
But whatever the case, I’ll be working hard to get better each day.
<br/><br/>My best is yet to come! 
</p>
            </div> 
            </div>           
        </section>
    );
}

export default About;
