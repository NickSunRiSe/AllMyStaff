import React from 'react';
import Header from '../components/UI/Header';
import LogoMain from "../components/images/LogoMain"

const Nothing = () => {
    return (
        
        <div>
          <div className="LogoMainDiv">
        <LogoMain />
        </div>
      <Header />
      <div className='nothing'>
      Данная страница не содержит какого либо контента.
      </div>
      
    </div>
    );
};

export default Nothing;