import React from 'react';
import SummaryImage1 from './assets/summary1.jpg';
import SummaryImage2 from './assets/summary2.jpg';
import SummaryImage3 from './assets/summary3.jpg';

const Summary = () => {
    return (
        <div className='mt-[100px]'>
            <div className='grid md: grid-rows-2 grid-flow-col gap-4'>
                <div className='row-span-3 relative'>
                    <button className='btnView absolute left-[40%] bottom-12'><b>SHOP NOW</b></button>
                    <img src={SummaryImage1} className='object-cover w-full h-full rounded-lg'></img>
                </div>
                <div className='row-span-2 relative'>
                <button className='btnView absolute left-[28%] bottom-12'><b>LEARN MORE ABOUT OUR MISSION</b></button>
                    <img src={SummaryImage2} className='rounded-lg'></img>
                </div>
                <div className='relative'>
                <button className='btnView absolute left-[42%] bottom-12'><b>SHOP NOW</b></button>
                    <img src={SummaryImage3} className='rounded-lg'></img>
                </div>
            </div>
        </div>
    );
};

export default Summary;