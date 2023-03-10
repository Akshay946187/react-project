import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label>NAME</label>
                    <input type="text" placeholder='pleace inter your name' />
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type="text" placeholder='pleace inter your email' />
                </div>
                <div>
                    <label>phone</label>
                    <input type="number" placeholder='pleace inter your phone' />
                </div>
                <button type='submit'>submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
