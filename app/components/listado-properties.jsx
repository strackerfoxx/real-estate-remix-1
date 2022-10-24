import Properties from "./properties"

export default function ListadoProperties({properties}) {
  return (
    <div>
       {properties.map( property => (
            <Properties property={property} key={property.id} />
       ) )}
    </div>
  )
}
