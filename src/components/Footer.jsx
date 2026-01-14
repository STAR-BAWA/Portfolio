import React from 'react'

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    )
}

export default Footer
