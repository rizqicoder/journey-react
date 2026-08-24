type TabsProps = {
  children: React.ReactNode,
  button: React.ReactNode,
  ButtonsContainer: React.ElementType
}

export default function Tabs({ button, children, ButtonsContainer = 'menu' }: TabsProps) {
  return <>
    <ButtonsContainer>{button}</ButtonsContainer>
    {children}
  </>
}