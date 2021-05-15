import React from 'react';
import Loader from './Spinner/Loader';

const Card = ({ cat, updateCat, loading }) => {

    console.log("CAT IN  ", cat)

    const handleRenderCat = () => {
        updateCat(cat.breed.id);
    }

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="card" onClick={ () => handleRenderCat() } >
            <img src={cat.image} alt="Noruego del bosque"/>            
            <p>
                { cat.breed.name }
            </p>
        </div>
    );
}

export default Card;
