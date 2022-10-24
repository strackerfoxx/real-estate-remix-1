import {useLoaderData} from '@remix-run/react'
import {getProperty} from '~/api/properties'

export async function loader({params}){
    const id = params.urlProperty
    const property = await getProperty(id)
    const propertyP = property.data

    return propertyP
}

export default function UrlProperty() {
  const property = useLoaderData()
  const {nombre, descripcion, imagen, precio} = property.attributes
  const imgUrl = imagen.data.attributes.url
  
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <img src={imgUrl} alt="" />
    </div>
  )
}
