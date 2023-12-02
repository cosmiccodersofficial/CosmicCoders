import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import cc from '../../images/Cosmic Coders.webp';
import Newton from '../../images/Newton.webp';
import './Home.css';

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const toRotate = ["Deep Down Into Cosmos of Coding!", "Where Learning Begins!!", "One Stop Solution For Community Based Learning!"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const partners = [Newton];

    return (
        <Container fluid className="home-container p-0">
            <Image src={cc} alt="Background" fluid className="home-background" loading="lazy" />
            <div className="blinking-color position-absolute hometext translate-middle text-center">
                <h1 className="display-2 fw-bold flex flex-wrap m-5 pt-5">
                    <span className="txt-rotate break-words m-5 text-" data-period="1000" data-rotate='[ "Deep Down Into Cosmos of Coding", "Where Learning Begins", "One Stop Solution for Community based learning" ]'>
                        {text}
                    </span>
                </h1>
            </div>
            <section className="partners-section bg-gray-50">
                <Container>
                    <h2 className="fs-1 text-blue-900 fw-bold mt-4">Our Partners</h2>
                    <marquee behavior="scroll" direction="right" className="marquee-container mb-4 mt-4" scrollamount="13">
                        {partners.map((partner, index) => (
                            <Image key={index} src={partner} alt={`Partner ${index + 1}`} className="partner-image rounded-4" />
                        ))}
                    </marquee>
                    <p className='fw-semibold fs-4 text-muted '>and many more to come</p>
                </Container>
            </section>
        </Container>
    );
};

export default Home;

