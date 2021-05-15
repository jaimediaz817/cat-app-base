import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Select from './components/Select';
// servicios
import getCat from './services/getCat';
import Error from './components/Error/Error';

const objInitialCat = {
  image: "https://www.animalandia0.com/wp-content/uploads/2019/06/bosque-noruego4-900x425.jpg",
  breed: {
    id: "1",
    name: "Gato por defecto - Noruego del bosque"
  }
}

function App() {

  const [cat, setCat] = useState(objInitialCat);

  // estado para el manejo de errores:
  const [error, setError] = useState(null);  

  // Loader
  const [loading, setLoading] = useState(false);

  // Efecto
  useEffect(() => {
    updateCat();
  }, []);

  const updateCat = (breedId) => {
    setLoading(true);
    getCat(breedId)
      .then((catIn) => {
        console.log("cat from App: ", catIn)
        setLoading(false);
        setCat(catIn)
        setError(null)
      })
      .catch(error =>{
        setLoading(false);
        setError("Error al obtener un gato" + error);
        console.log(error);
      })
  }

  return (
    <div className="app">
      <Select updateCat={updateCat} />
      { error && <Error text={error} /> }
      <Card cat={cat} updateCat={updateCat} loading={loading} />      
    </div>
  );
}

export default App;
