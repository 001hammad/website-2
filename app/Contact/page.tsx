import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <main>
        <div className='text-center'>
            <h1><b>Welcome To Contact Page</b></h1>
        </div>
        <div className='text-center p-6 hover:underline'>
            <Link href="https://www.linkedin.com/in/hammad-hafeez-554789329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='none'><b> LinkIn: Click me</b></Link>
        </div>
        <div className='text-center  hover:underline'>
            <Link href="https://www.facebook.com/share/JqcdpEeS7LCn7Emc/?mibextid=qi2Omg" target='none'><b> Facebook: Click me</b></Link>
        </div>
        <div className='text-center p-3'>
            <h3><b>whatsapp: +92 172774236</b></h3>
        </div>
        
    </main>
  )
}

export default Contact
