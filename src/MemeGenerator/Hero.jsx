import React, { useState } from 'react';
import { FcEditImage } from 'react-icons/fc';
import MemeData from './MemeData';

const Hero = () => {
    const [image, setImage] = useState('default-image-url');
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState('');

    function generateMemeImage() {
        const memeArray = MemeData.data.memes;
        const ranInd = Math.floor(Math.random() * memeArray.length);
        const newImageUrl = memeArray[ranInd].url;
        setImage(newImageUrl);
       }
    

    return (
        <div className='w-[550px] h-[550px]'>
            <div className='flex mt-10 justify-around'>
                <div className='h-[55.01px] w-[222px]'>
                    <p className='font-semibold pl-12'>Top Text</p>
                    <input
                        type="text"
                        placeholder="Enter top text"
                        className="border rounded px-2 h-8"
                        value={topText}
                        onChange={(e) => {
                            setTopText(e.target.value);
                        }}                        
                    />

                </div>
                <div className="text-input-container">
                    <p className="font-semibold pl-12">Bottom Text</p>
                    <input
                        type="text"
                        placeholder="Enter bottom text"
                        className="border rounded px-2 h-8"
                        value={bottomText}
                        onChange={(e) => setBottomText(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="rounded h-10 w-full bg-gradient-to-r mt-8 from-[rgb(102,35,138)] to-[rgb(166,39,210)] text-white flex justify-center items-center text-lg"
                onClick={generateMemeImage}
            >
                Get a new meme image<FcEditImage className="pl-2" />
            </button>
            <div className={`image-container mt-8 bg-cover bg-center h-[358px] w-[548px]`} style={{ backgroundImage: `url(${image})` }}>
                <h3 id='2' className="text-4xl font-bold text-center pt-8 z-5 text-white">{topText}</h3>
                <h3 className="text-4xl font-bold text-center pt-48 relative text-white">{bottomText}</h3>
            </div>
        </div>
    );
};

export default Hero;
