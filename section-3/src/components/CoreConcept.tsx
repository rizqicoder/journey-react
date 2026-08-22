interface CoreConceptProps {
  title: string;
  image: string;
  description: string;
}

export default function CoreConcept({title, image, description}: CoreConceptProps) {
  return <>
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  </>
}