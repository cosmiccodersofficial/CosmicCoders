import React, { useState, useEffect } from 'react';
import './Home.css';
import cc from '../../images/Cosmic Coders.png';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = [ "Deep Down Into Cosmos of Coding!", "Where Learning Begins!!", "One Stop Solution For Community Based Learning!"  ];
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
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className='home'>
        <img src={cc} alt=''/>
        <div className='hometext blinking-color right-100 top-100 absolute m-5 pt-5'>
            <h1 className='text-7xl flex flex-wrap font-bold  m-5 pt-5'> 
              <span className="txt-rotate break-words m-5 text-" data-period="1000" data-rotate='[ "Deep Down Into Cosmos of Coding", "Where Learning Begins", "One Stop Solution for Community based learning" ]'>
                {text}
              </span>
            </h1>
        </div>
    </div>
  );
}

export default Home;
