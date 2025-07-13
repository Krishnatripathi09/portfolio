import React from 'react';
import Card from './Card';
import { cv } from '../../Data';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './Resume.css';

const Resume = () => {
  return (
    <section

    
      className='pb-[220px] bg-gradient-0 dark:bg-gradient-0 dark:from-bgColorAltDark dark:to-bgColorDark from-bgColor to-bgColor px-[10%] sm:px-[8%] 2xl:px-[17%]'
      id='resume'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Resume
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Story
        </span>
      </p>

      <div className='md:grid-cols-2 grid gap-16'>
        
        <div className='resume__group'>
          <h3 className='text-center text-h4Size border-b-[2px] border-b-solid text-titleColor dark:text-titleColorDark border-b-borderColor dark:border-b-borderColorDark pb-[30px]'>
            Education & Certificate
          </h3>
          <div className='resume__items'>
            {cv.map((val, id) => {
              if (val.category === 'education') {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className='resume__group'>
          <h3 className='text-center text-h4Size border-b-[2px] border-b-solid text-titleColor dark:text-titleColorDark border-b-borderColor dark:border-b-borderColorDark pb-[30px]'>
            Experience
          </h3>
          <div className='resume__items'>
            {cv.map((val, id) => {
              if (val.category === 'experience') {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
         <div className="relative">
            {/* Floating WhatsApp Button */}
            <a href="https://api.whatsapp.com/send?phone=919284640248&text=Hello%20cypher%20what's%20up%20!" 
                className="fixed bottom-20 right-10 text-white rounded-full w-14 h-14 flex items-center justify-center z-50 glowing-whatsapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: '#25D366' }}>
                <i className="fab fa-whatsapp fa-2x" style={{ color: '#FFFFFF' }}></i>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
