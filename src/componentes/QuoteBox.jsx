import { useState } from 'react';
import quotes from './quotes.json';

const QuoteBox = () => {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const [index, setIndex] = useState(randomIndex);


    const passQuote = ()=> {
       const randomQuote = Math.floor(Math.random()*quotes.length);
        setIndex(randomQuote);
    };
    const colorView = ['#6257D3', '#196F3D', '#BA4A00', '#7B241C', '#283747', '#6C3483', '#F1C40F', '#57D3CF', '#D35782', '#FF0400'];
    
    const colorChange = Math.floor(Math.random()*colorView.length);
    const colors = colorView[colorChange];    
    document.body.style=`background: ${colors}`;

    return (
        <div className='backgroundQuote'>
            <div className='container'>
            <span><i style={{color:colors}} className="fa-solid fa-quote-left" ></i></span>
            <p className='quotePhrase' style={{color:colors}} >{quotes[index].quote}"</p>
            </div>
            <h1 className='writter' style={{color:colors}} >-{quotes[index].author}</h1>
            <button onClick={passQuote}><i style={{color:colors}} class="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default QuoteBox;