import '../style/index.css'

export default function Home() {
    return (
        <div className="complete-wrapper">
            <div className='complete-container'>
            <div>
                <img src="\src\images\complete.png" alt="" />
            </div>
            <div>
                <small>CONFIRMATION</small>
                <h1>Signup Complete</h1>
                <p>We look forward seeing you at the event</p>
            </div>
            <button onClick={() => window.location.href = '/'}>
                Order more tickets
            </button>
            </div>
         </div>
    )
}