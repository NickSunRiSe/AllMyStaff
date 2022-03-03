import React from 'react';
import Header from '../components/UI/Header';

const Nothing = () => {
    return (
        <div>
      <Header />
      <div className='nothing'>
      Данная страница не содержит какого либо контента.
      </div>
      
    </div>
    );
};

export default Nothing;