import {Box} from './components/box'
import {Stack} from './components/stack'

function App() {
  return (
    <Stack direction="row" spacing={4} padding={4} bg="primary">
      <Box boxSize={16} backgroundColor="secondary"></Box>
      <Box boxSize={16} backgroundColor="secondary"></Box>
      <Box boxSize={16} backgroundColor="secondary"></Box>
      <Box boxSize={16} backgroundColor="secondary"></Box>
    </Stack>
  )
}

export default App
