import React from 'react';

import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';

export const Cardsss = ({ title, description, stack, demo, code,image }) => {
  return (
    <div className="card">
      <div 
        className="top-section"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="border"></div>
        <div className="icons">
        <span className=" text-[10px] font-bold tracking-tighter text-amber-400  p-2">{title}</span>
          <div className="logo">
        
            {/* Add logo or any other content */}
          </div>
          <div className="flex justify-center items-center gap-5 mr-5">
            {/* Demo link */}
            {demo && (
              <Link to={demo}  rel="noopener noreferrer" className="text-amber-400 text- ">
                <FaExternalLinkAlt />
              </Link>
            )}

            {/* GitHub link */}
            {code && (
              <Link to={code}  rel="noopener noreferrer" className="text-amber-400 text-2xl ">
              <FaCode />

              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="bottom-section text-amber-400 text-start">
        
        <p className='tracking-tighter text-start text-[10px] '>{description}</p>
        <div className="tracking-tighter text-start text-xs mt-6">
          <p className="text-[10px] text-center"> {stack.join(' | ')}</p>
        </div>
      </div>
    </div>
  );
};
