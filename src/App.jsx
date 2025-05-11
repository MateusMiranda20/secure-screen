import Routes from "./routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AccessProvider } from "./context/AccessContext"
import { SocketProvider } from "./context/SocketContext"

function App() {

  return (
    <>
      <GlobalStyles />
      <AccessProvider>
        <SocketProvider>
          <Routes />
        </SocketProvider>
      </AccessProvider>
    </>
  )
}

export default App
