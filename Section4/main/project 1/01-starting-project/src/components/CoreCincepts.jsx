import {CORE_CONCEPTS} from "../data.js"
import CoreConcept from "./CoreConcept.jsx"
import Section from "./Section.jsx"
export default function CoreConcepts(){
    return (
<Section title="Core Concepts" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>( <CoreConcept {...conceptItem}/>))}
      
        </ul>

        </Section>
    )
}