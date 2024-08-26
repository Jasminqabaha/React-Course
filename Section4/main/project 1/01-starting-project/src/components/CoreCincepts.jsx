import {CORE_CONCEPTS} from "../data.js"
import CoreConcept from "./CoreConcept.jsx"

export default function CoreConcepts(){
    return (
<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>( <CoreConcept {...conceptItem}/>))}
      
        </ul>

        </section>
    )
}