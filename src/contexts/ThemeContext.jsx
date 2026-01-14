import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setTheme(savedTheme)
        applyTheme(savedTheme)
    }, [])

    const applyTheme = (newTheme) => {
        const root = document.documentElement

        if (newTheme === 'dark') {
            root.style.setProperty('--bg-color', '#050505')
            root.style.setProperty('--text-color', '#f0f0f0')
            root.style.setProperty('--secondary-color', '#1a1a1a')
        } else {
            root.style.setProperty('--bg-color', '#ffffff')
            root.style.setProperty('--text-color', '#1a1a1a')
            root.style.setProperty('--secondary-color', '#f5f5f5')
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
