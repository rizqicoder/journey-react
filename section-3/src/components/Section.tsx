
type SectionProps = React.ComponentProps<'section'> & {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children, ...props }: SectionProps) {
  return <>
    <section {...props} >
      <h2>{title}</h2>
      {children}
    </section>
  </>
}