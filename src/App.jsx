import Routes from "./routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AccessProvider } from "./context/AccessContext"

function App() {

  return (
    <>
      <GlobalStyles />
      <AccessProvider>
        <Routes />
      </AccessProvider>
    </>
  )
}

export default App
