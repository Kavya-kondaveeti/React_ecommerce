import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div>Home
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi suscipit cumque quam illum vel libero velit temporibus nesciunt et nobis tenetur eum ex iure obcaecati, ipsum non quasi nulla.</p>
        <button onClick={()=>navigate("/contact")}>Enquiry/customer/support</button>
    </div>
  )
}

export default Home