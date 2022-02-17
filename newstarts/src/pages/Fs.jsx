import React, {useState, useEffect} from 'react';
import Text1 from '../components/Text1';
import Text3 from '../components/Text3';
import End from '../components/End';



const FirstPage = () => {
    return (
        <div className="con">
        <Text1 />
        <Text3 />
        <End />
        </div>
    );
};

export default FirstPage;