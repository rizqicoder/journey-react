import { useState } from 'react';

import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

import { reactSelected, EXAMPLES } from '@/types/data';
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
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
    <Section title='Examples' id='examples'>
      <Tabs
        ButtonsContainer='menu'
        button={
          reactSelected.map((data, index) => (
            <TabButton key={index} isSelected={selectedTopic === data} onSelect={() => handleSelect(data)}>
              {data}
            </TabButton>
          ))
        }>
        {tabContent}
      </Tabs>
    </Section>
  )
}
{/* <menu>
  {reactSelected.map((data, index) => (
    <TabButton key={index} isSelected={selectedTopic === data} onSelect={() => handleSelect(data)}>
      {data}
    </TabButton>
  ))}
</menu>
{tabContent} */}