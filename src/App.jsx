import { MainLayout } from "./layout/MainLayout"
import { HelmetProvider } from "react-helmet-async"

function App() {
  
  return (
    <HelmetProvider>
      <MainLayout></MainLayout>
    </HelmetProvider>
  )
}

export default App
