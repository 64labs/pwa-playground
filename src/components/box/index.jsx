import {sprinkles} from '../../sprinkles.css'

export const Box = ({children, ...props}) => {
  let elementProps = {}
  let styleProps = {}

  Object.keys(props).forEach((key) => {
    if (sprinkles.properties.has(key)) {
      return (styleProps[key] = props[key])
    } else {
      return (elementProps[key] = props[key])
    }
  }, {})

  return (
    <div className={sprinkles(styleProps)} {...elementProps}>
      {children}
    </div>
  )
}
