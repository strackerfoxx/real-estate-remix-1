import {Link} from '@remix-run/react'

export default function Properties({property}) {
    const {nombre, descripcion, precio, imagen, createdAt } = property.attributes
    const { id } = property
  return (
    <div className=''>
        <img src={imagen.data.attributes.formats.medium.url} alt="" />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>

        <Link to={`/property/${id}`} className="enlace" >Ver Propiedad</Link>
    </div>
  )
}
