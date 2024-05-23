import './styles/app.scss'
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { useState } from 'react'
import { ThemeProvider } from './components/theme-provider'
// import { ModeToggle } from './components/mode-toggle'
import { HomePage } from './components/pages/HomePage'


function App() {
    // const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/* <div className='theme-green' >
                <p>Hello, world!</p>
                <Button>Click me</Button>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
                <ModeToggle />
            </div> */}
            <HomePage />
        </ThemeProvider>
    )
}

export default App
