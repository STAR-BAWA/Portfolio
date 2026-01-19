import React from 'react'

const Footer = () => {
    return (
        <footer className="py-8 md:py-12 text-center mt-16 border-t border-gray-800">
            <p className="text-gray-400 text-sm md:text-base">
                © {new Date().getFullYear()} STAR BAWA. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
