
/* 
mediante esta  FN obtenemos la lista de razas
*/
const getBreed = async () => {
    let url = "https://api.thecatapi.com/v1/breeds";

    const res = await fetch(url);

    // VALIDAR POSIBLES ERRORES
    if (!res.ok) {        
        const { status, statusText, url } = res;
        throw Error(`Error: ${status} - ${statusText} en la URL: ${url}`);
    }
    
    const breeds = await res.json();

    return breeds;
}

export default getBreed;