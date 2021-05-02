import { Facebook, GitHub, Instagram, Twitter } from "react-feather";
import Seperator from "../seperator/Seperator";
// eslint-disable-next-line
const Content = () => {
    return(
        <>
        <div>
            <h1 className="heading2Xl">Deepjyoti Roy</h1>
            <p className="headingMd">
                Hi there, I'm a <strong>Software Engineer</strong>, focused on Big Data and ETL Tools. I also work with <strong>frontend</strong> and <strong>backend</strong> web technologies to create *hobby* projects.
            </p>
            {/* <ul className="list">
                <li className="listItem"><a href="#">About</a></li>
                <li className="listItem"><a href="#">Github</a></li>
                <li className="listItem"><a href="#">Blogs</a></li>
                <li className="listItem"><a href="#">Resume</a></li>
            </ul> */}
            {/* <p className="headingLg">
                Connect with me:
            </p> */}
            
            <ul className="list">
                
                <li className="listItem"><a href="#"><Twitter /></a></li>
                <li className="listItem"><a href="#"><GitHub /></a></li>
                <li className="listItem"><a href="#"><Facebook /></a></li>
                <li className="listItem"><a href="#"><Instagram /></a></li>
            </ul>
            <p className="headingMd lightText">deepjyotiroy@gmail.com</p>
            
            
        </div>
        <Seperator my={[4, 5]} width={["50%", "25%"]} height={24} />
            <div>
            <p className="headingLg">
                Highlighted Projects
            </p>
            <p className="headingMd">
                Hi there, I'm a <strong>Software Engineer</strong>, focused on Big Data and ETL Tools. I also work with <strong>frontend</strong> and <strong>backend</strong> web technologies to create *hobby* projects.
            </p>
            <p className="headingMd">
                Hi there, I'm a <strong>Software Engineer</strong>, focused on Big Data and ETL Tools. I also work with <strong>frontend</strong> and <strong>backend</strong> web technologies to create *hobby* projects.
            </p>
            <p className="headingMd">
                Hi there, I'm a <strong>Software Engineer</strong>, focused on Big Data and ETL Tools. I also work with <strong>frontend</strong> and <strong>backend</strong> web technologies to create *hobby* projects.
            </p>
            <p className="headingMd">
                Hi there, I'm a <strong>Software Engineer</strong>, focused on Big Data and ETL Tools. I also work with <strong>frontend</strong> and <strong>backend</strong> web technologies to create *hobby* projects.
            </p>
            </div>
        </>
    );
}

export default Content;