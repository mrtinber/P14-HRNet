import { Router } from "./components/Router"
import './scss/main.scss'
import { useStore } from "./store/useStore"

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
