import './App.css';
import MemeData from './memedata';
import { useState } from 'react';


 export default function Wrapper(){

    const [meme, setMeme] = useState(
        {
            topText:"",
            bottomText:"",
            memeImage:"http://i.imgflip.com/1bij.jpg",
        }
    )

    // eslint-disable-next-line no-unused-vars
    const  [memeImage, setMemeImage] =  useState(MemeData)


    function getMemeImage() {
       const memeArray = memeImage.data.memes;
       const randomNumber = Math.floor(Math.random() * memeArray.length);
       const imageUrl = memeArray[randomNumber].url;

       // using setMeme

       setMeme( (preMeme) => {
           return {
               ...preMeme,
               memeImage:imageUrl,
           }
       })
    }
    return(
        <div className="Main">
            <div className="Form">
                <input className="Input-form" type="text" placeholder="Enter Joke"></input>
                <input className="Input-form" type="text" placeholder="Enter Joke"></input>
                <button className="Submit-btn" onClick={getMemeImage} >Generator new Meme !</button>
            </div>
            <img src={meme.memeImage} alt="alt" width="100%" />
        </div>
    );
}