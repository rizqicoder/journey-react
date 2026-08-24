import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPT } from '@/types/data';
export default function CoreConsepts() {
  return (
    <Section title="Time to get started" id={"core-concepts"} aria-label="core-concepts" >
      <ul>
        {CORE_CONCEPT.map((concept, index) => (
          <CoreConcept {...concept} key={index} />
        ))}
      </ul>
    </Section>
  )
}