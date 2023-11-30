import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './OurTeam.css';

const TeamMember = ({ name, role, linkedin, imageSrc }) => {
  return (
    <div className="p-5 rounded-md">
      <div className="d-flex flex-column align-items-center mb-4">
        <img src={imageSrc} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
      </div>
      <h1 className='h2 mt-4 animate-fade'>{name}</h1>
      <h1 className='h5 animate-fade'>{role}</h1>
      <Link to={linkedin} target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
      </Link>
    </div>
  );
}

export default TeamMember;
