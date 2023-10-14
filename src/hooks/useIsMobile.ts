import { useState, useEffect } from 'react'

// Custom hook to check if the screen is mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    // Initial check
    checkIsMobile()

    // Add an event listener for window resize
    window.addEventListener('resize', checkIsMobile)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return isMobile
}

export default useIsMobile
