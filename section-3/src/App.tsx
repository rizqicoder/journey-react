
import './App.css'

import reactImg from '@/assets/react-core-concepts.png'
import CoreConcept from '@/components/CoreConcept';
import Header from '@/components/header/Header';
import TabButton from '@/components/TabButton';

import { CORE_CONCEPT, reactDescription, reactSelected, EXAMPLES } from '@/types/data';
import { useState } from 'react';

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

function App() {

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const headerDesc = reactDescription[getRandomInt(reactDescription.length)];
  const handleSelect = (selected: string): void => {
    // selected -> component, jsx, props, state
    setSelectedTopic(selected);
    console.log("handle selected... " + selected);
  }

  let tabContent = <p>please select a topic</p>
  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
  }

  return (
    <>
      <Header desc={headerDesc} reactImg={reactImg} />
      <main>
        <section id="core-concepts">
          <h2>Time to get started</h2>
          <ul>
            {CORE_CONCEPT.map((concept, index) => (
              <CoreConcept {...concept} key={index} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {reactSelected.map((data, index) => (
              <TabButton key={index} isSelected={selectedTopic === data} onSelect={() => handleSelect(data)}>
                {data}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App
