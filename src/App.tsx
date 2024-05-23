import './styles/app.scss'
import { ThemeProvider } from './components/theme-provider'
import { HomePage } from './components/pages/HomePage'
import { useState } from 'react'


function App() {
    const [theme, setTheme] = useState('theme-green')

    function changeTheme() {
        if (theme === 'theme-green') {
            setTheme('theme-red')
        } else {
            setTheme('theme-green')
        }
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div id='main-content' onClick={changeTheme} className={theme}>
                <HomePage />
            </div>
        </ThemeProvider>
    )
}

export default App
