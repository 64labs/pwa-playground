/**
A basic Text primitive. Still a WIP, more to explore here!
*/

export const Text = ({as: Element = 'p', children, ...props}) => {
  return <Element {...props}>{children}</Element>
}
