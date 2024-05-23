import './styles/app.scss'
import { ThemeProvider } from './components/theme-provider'
import { HomePage } from './components/pages/HomePage'


function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <HomePage />
        </ThemeProvider>
    )
}

export default App
