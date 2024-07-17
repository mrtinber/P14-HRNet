import { useStore } from './coreLogic/store/useStore'
import { Router } from './Router'
import './ui/scss/main.scss'

function App() {
  const { isThemeDark } = useStore()

  return (
    <>
      <div className= {isThemeDark ? 'theme--dark' : 'theme--default'}>
        <Router />
      </div>
    </>
  )
}

export default App
