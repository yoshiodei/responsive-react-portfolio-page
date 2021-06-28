import './../Assets/css/Project.css';
import p1 from './../Assets/Project_1.PNG';
import p2 from './../Assets/Project_2.JPG';
import p3 from './../Assets/Project_3.JPG';
import p4 from './../Assets/Project_4.PNG';
import p5 from './../Assets/Project_5.JPG';
import p6 from './../Assets/Project_6.PNG';
import p7 from './../Assets/Project_7.PNG';
import p8 from './../Assets/Project_8.JPG';
import p9 from './../Assets/Project_9.JPG';

const Project = () => {
    return (
        <section className="Project">
            <div className="Project__heading__div">
                <h3 className="Project__heading">My Projects</h3>
                <div className="Project__heading__line"></div>
            </div>
            <div className="Project__outer__div">
                <div className="Project__div">
                    <img src={p1} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Softdash - money monitaring app</a>
                </div>
                <div className="Project__div">
                    <img src={p2} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Stray - weather monitaring app</a>
                </div>
                <div className="Project__div">
                    <img src={p3} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Bee Hive - business website</a>
                </div>
                <div className="Project__div">
                    <img src={p4} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">La Croix - online restaurant</a>
                </div>
                <div className="Project__div">
                    <img src={p5} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Sprint - e-commerce website</a>
                </div>
                <div className="Project__div">
                    <img src={p6} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Easy Food - food ordering app</a>
                </div>
                <div className="Project__div">
                    <img src={p7} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Plant shop - online gardening app</a>
                </div>
                <div className="Project__div">
                    <img src={p8} className="Project__img" alt="project image" />
                    <a className="Project__title" href="#">Trench - business website</a>
                </div>
            </div>    
        </section>
    );
}

export default Project;
