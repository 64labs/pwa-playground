import {sprinkles} from '../../sprinkles.css'

/**
This is our core design primitive. It accepts any style props defined in
our sprinkles, converts those prop values to the corrsponding generated
classnames and applies to them to a DOM element. 
*/

export const Box = ({as: Element = 'div', children, ...props}) => {
  // Separate style props from element props. Style props correspond
  // to the properties defined in sprinkles. All other props should be
  // passed to the underlying element.
  let elementProps = {}
  let styleProps = {}

  Object.keys(props).forEach((key) => {
    if (sprinkles.properties.has(key)) {
      return (styleProps[key] = props[key])
    } else {
      return (elementProps[key] = props[key])
    }
  }, {})

  // Applying style props to sprinkles returns associated classnames
  // for the component/element.
  const className = sprinkles(styleProps)

  return (
    <Element className={className} {...elementProps}>
      {children}
    </Element>
  )
}
