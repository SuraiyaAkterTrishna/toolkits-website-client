import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='bg-indigo-100  p-10 m-10 border rounded-lg'>
            <h1 className='text-5xl font-bold'>Name: Suraiya Akter Trishna</h1>
            <br />
            <h2 className='text-2xl'><span className='font-bold'>Email: </span> suraiyaaktertrishna@gmail.com</h2>
            <p className='text-2xl'><span className='font-bold'>Education: </span>BSC in Computer Science and Engineering at Northern University Of Business and Technology, Khulna.</p>
            <br /> 
            <p className='text-2xl'><span className='font-bold'>Skills: </span>HTML, CSS, Bootstrap, Tailwind CSS, DaisyUI, JavaScript, React.js, Node.js, Express, MongoDB, API, Browser and Debug, Firebase, Heroku, Netlify, GitHub, Figma, Graphics Design, Good at Speaking and Writing English. </p> 
            <br />
            <p className='text-4xl font-bold'>Some of My Live Website Links:</p> 
            <br />
            <p className='text-2xl'>1. Warehouse Management System: https://warehouse-management-b2b0c.web.app/</p>
            <p className='text-2xl'>1. Warehouse Management System: https://warehouse-management-b4b0c.web.app/</p>
            <p className='text-2xl'>2. Health Coach: https://health-coach-372bc.firebaseapp.com/</p>
            <p className='text-2xl'>3. Plant Paradise: https://plant-paradise.netlify.app/</p>
        </div>
    );
};

export default Portfolio;