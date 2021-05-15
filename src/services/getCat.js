/* 
Obtener un gato aleatorio
*/
const getCat = async (breedId) => {

    // validaciones
    let url = "";

    if (!breedId) {
        // obtener un gato aleatorio
        url = "https://api.thecatapi.com/v1/images/search";
    } else {
        // obtener un gato a partir de su ID (RAZA - BREED)
        // acur
        url = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId
    }

    // let url = "https://api.thecatapi.com/v1/images/search";

    let res = await fetch(url);

    // justo antes de darle formato
    // VALIDAR POSIBLES ERRORES
    if (!res.ok) {        
        const { status, statusText, url } = res;
        throw Error(`Error: ${status} - ${statusText} en la URL: ${url}`);
    }    

    // const cat = await res.json();
    const [data] = await res.json();

    const {url: urlImage, breeds: [breed]} = data;

    // validaciones
    if (!breed) {
        breed = {
            id: 0,
            name: 'Randmo'
        }
    }

    // *** IMPORTANTE  copnstruimos el objeto CAT desde APP.js
    const objCat = {
        image: urlImage,
        breed
    }

    return objCat;
}

export default getCat;