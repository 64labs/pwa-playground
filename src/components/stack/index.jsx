import {Box} from '../box'

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
