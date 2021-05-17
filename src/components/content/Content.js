import { Facebook, Linkedin, GitHub, Instagram, Twitter } from 'react-feather';
import Seperator from '../seperator/Seperator';
import { Projects } from '../projects/Projects';

// eslint-disable-next-line
const Content = () => {
    const size = 32;
    return (
        <>
            <div>
                <h1 className="heading2Xl">Deepjyoti Roy</h1>
                <p className="headingMd">
                    Hi there <span>👋</span>, I'm a{' '}
                    <strong>
                        Software Engineer <span>👨‍💻</span>
                    </strong>
                    , focused on Big Data and ETL Tools. I also work with{' '}
                    <strong>frontend</strong> and <strong>backend</strong> web
                    technologies to create *hobby* projects.
                </p>
                {/* Social   Icons */}
                <ul className="list">
                    <li className="listItem">
                        <a
                            className="social-links"
                            href={`https://twitter.com/de_coder_079`}
                        >
                            <Twitter size={size} />
                        </a>
                    </li>
                    <li className="listItem">
                        <a
                            className="social-links"
                            href={`https://www.linkedin.com/in/deepjyoti-roy-079/`}
                        >
                            <Linkedin size={size} />
                        </a>
                    </li>
                    <li className="listItem">
                        <a
                            className="social-links"
                            href={`https://github.com/deepjyotiroy079`}
                        >
                            <GitHub size={size} />
                        </a>
                    </li>
                    <li className="listItem">
                        <a
                            className="social-links"
                            href="https://www.facebook.com/deepjyoti.roy.169"
                        >
                            <Facebook size={size} />
                        </a>
                    </li>
                    <li className="listItem">
                        <a
                            className="social-links"
                            href="https://www.instagram.com/de_coder_079/"
                        >
                            <Instagram size={size} />
                        </a>
                    </li>
                </ul>
                <p className="headingMd lightText">deepjyotiroy@gmail.com</p>
            </div>
            <Seperator my={[4, 5]} width={['50%', '25%']} height={24} />
            <div>
                <p className="headingLg">Highlighted Projects</p>
                <Projects />
            </div>
            <Seperator my={[4, 5]} width={['50%', '25%']} height={24} />
        </>
    );
};

export default Content;
