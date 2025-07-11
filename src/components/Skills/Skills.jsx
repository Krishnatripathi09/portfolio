import React from 'react';
import { skill } from '../../Data';

const Skills = () => {
  // Group skills by proficiency level
  const skillsByLevel = {
    // Expert: skill.filter(s => s.percentage >= 90),
    // Advanced: skill.filter(s => s.percentage >= 80 && s.percentage < 90),
    // Proficient: skill.filter(s => s.percentage >= 70 && s.percentage < 80),
    // Familiar: skill.filter(s => s.percentage < 70)
  };

  return (
    <section
      className='pb-[120px] xs:pb-[220px6] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]'
      id='skills'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Professional Skills
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Talent
        </span>
      </p>

      <div className='grid gap-8 mx-4 mb-12 ms:mx-0'>
        {Object.entries(skillsByLevel).map(([level, skills]) => (
          <div key={level} className='skills-category'>
            <h3 className='mb-6 text-xl font-bold text-primaryColor'>{level}</h3>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {skills.map(({ id, name, description }) => (
                <div
                  key={id}
                  className='p-5 transition-shadow duration-300 border-2 skills_item border-titleColor rounded-2xl bg-bgColorAlt hover:shadow-lg hover:border-primaryColor dark:border-2 dark:border-titleColorDark dark:bg-bgColorAltDark dark:hover:border-primaryColor'
                >
                  <h4 className='text-larger text-titleColor font-[700] dark:text-titleColorDark mb-3'>
                    {name}
                  </h4>
                  <p className='text-titleColor dark:text-titleColorDark text-small'>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-3 mx-4 ms:mx-0'>
        {skill.map(({ id, name }) => (
          <span 
            key={id}
            className='px-4 py-2 font-medium transition-colors duration-300 border-2 rounded-full bg-bgColorAlt dark:bg-bgColorAltDark border-titleColor dark:border-titleColorDark text-titleColor dark:text-titleColorDark hover:bg-primaryColor hover:text-white hover:border-primaryColor'
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
