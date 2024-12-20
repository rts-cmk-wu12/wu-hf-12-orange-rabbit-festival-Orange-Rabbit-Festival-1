import '../style/index.css'
import { useState, useEffect } from 'react'

export default function PartiHeader() {
    const [participantCount, setParticipantCount] = useState(0)

    useEffect(() => {
        const handleStorageChange = () => {
            const storedData = localStorage.getItem('formData')
            if (storedData) {
                setParticipantCount(1)
            } else {
                setParticipantCount(0)
            }
        }

        handleStorageChange()
        window.addEventListener('storage', handleStorageChange)
        
        const storageCheckInterval = setInterval(handleStorageChange, 50)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            clearInterval(storageCheckInterval)
        }
    }, [])

    return (
        <div className="participant-header">
            <p>Your participants</p>
            <h3>{participantCount} Participants{participantCount !== 1 ? '' : ''}</h3>
            <div className="dashed-border-line">
                
            </div>

                {participantCount === 0 && <p className="no-participants">No participants added...</p>}

        </div>
        
    
    )
}