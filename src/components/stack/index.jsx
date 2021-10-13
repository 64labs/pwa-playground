import {Box} from '../box'

/**
A basic Stack component built from our <Box/> primitive. Uses native flex-gap for
spacing the items. Still a WIP, but illustrates the idea of composing with <Box/>
and implementing custom styling props for different use cases.

More to explore here!
*/

export const Stack = ({
  direction = 'column',
  spacing = 'small',
  children,
  ...props
}) => {
  return (
    <Box display="flex" flexDirection={direction} gap={spacing} {...props}>
      {children}
    </Box>
  )
}
