import React, { useState, useEffect, Fragment } from 'react';
import getBreed from './../services/getBreeds';
import Error from './Error/Error';

const objIniialBreeds = [
    {
        id: 1,
        name: "Noruego del Bosque"
    },
    {
        id: 2,
        name: "Gato Persa"
    },
    {
        id: 3,
        name: "Bengala"
    },    
];

const Select = ({ updateCat }) => {

    // Definiendo el primer estado inicial de las razas
    const [breeds, setBreads] = useState(objIniialBreeds);

    // estado para el manejo de errores:
    const [error, setError] = useState(null);

    // Hook que nos permite detectar un cambio en un estado para ejecutar la funcion y renderizar
    useEffect(() => {
        updateBreeds();
    }, []);

    // funcion que se encarga de recibir la info. del servicio definido
    const updateBreeds = () => {
        getBreed()
            .then((breedsIn) => {
                setBreads(breedsIn);
                console.log("breeds: ", breedsIn);
            })
            .catch(error => {                
                console.log("COMPONENTE SELECT", error);
                setError("error al obtener razas de gatos" + error);
            })
    }

    return (
        <Fragment>
            <select onChange={ (e) => updateCat(e.target.value) }>
                { breeds && breeds.map(breed => {
                    return <option value={breed.id} key={breed.id} >{ breed.name }</option>
                })}
            </select>

            {error && <Error text={error} />}
        </Fragment>
    );
}

export default Select;