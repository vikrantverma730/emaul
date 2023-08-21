import "./FormsStyle.css"

import React from 'react'

const Forms = () => {
  return (
    <div className="form">
    <form method="GET">
    <label>Your Name</label>
    <input type="text" required></input>
    <label>Your Email</label>
    <input type="Email" required></input>
    <label>Subject</label>
    <input type="text" required></input>
    <label>Message</label>
    <textarea rows={6} placeholder="Type Your message here"></textarea>
    <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default Forms;