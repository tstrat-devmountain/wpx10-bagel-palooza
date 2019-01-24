import React from 'react';
import starFull from '../../media/star_full.png';
import starEmpty from '../../media/star_empty.png';
import './bagelDisplay.css';

const BagelDisplay = (props) => {
    const { name, imageUrl, rating } = props.bagel;
    const stars = [1,2,3,4,5].map((n) => <img key={'star'+n}className='star' src={n <= rating? starFull : starEmpty} alt='star'/>)

    return (
        <div className='bagel'>
            <h1>{name}</h1>
            <div className='stars'>{stars}</div>
            <img src={imageUrl} alt='bagels!'/>
        </div>
    );
};

export default BagelDisplay;