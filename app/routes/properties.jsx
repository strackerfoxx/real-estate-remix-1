import { useLoaderData } from "@remix-run/react"
import {getProperties} from "~/api/properties"

import ListadoProperties from "../components/listado-properties"

export async function loader() {
    const  properties = await getProperties()
    const propertiesP = properties.data

    return propertiesP
     
}

export default function Properties() {
    const properties = useLoaderData() 
  return (
    <div>
        <ListadoProperties properties={properties} />
    </div>
  )
}
 