export async function getProperties(){
    const respuesta = await fetch(`${process.env.API_URL}/properties?populate=imagen`)
    return respuesta.json()
}

export async function getProperty(id){
    const respuesta = await fetch(`${process.env.API_URL}/properties/${id}?populate=imagen`)
    return respuesta.json()
}
