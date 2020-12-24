import React from 'react'
import { Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ispum .......</p>
            <p>See my <Link to='/about'>about us</Link> page for reference</p>
            <p>See my <Link to='/contact'>contact</Link> page for reference</p>

        </div>
    )
}

export default Home
