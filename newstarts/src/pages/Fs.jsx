import React, {useState, useEffect} from 'react';
import Text1 from '../components/Text1';
import Text3 from '../components/Text3';
import End from '../components/End';
import Header from '../components/UI/Header';


const FirstPage = () => {
    return (
        <div className="con">
        <Header/>
        <Text1 />
        <Text3 />
        <End />
        </div>
    );
};

export default FirstPage;