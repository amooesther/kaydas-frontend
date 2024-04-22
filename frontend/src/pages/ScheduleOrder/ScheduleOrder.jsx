import React from 'react'
import './ScheduleOrder.css'
import arrowLeft from '../../Assets/arrowLeft.png'
import Button from '../../Components/Button/Button.jsx'

const ScheduleOrder = () => {
  return (
    <div className='ScheduleWrapper'>
        <div className='Wrap'>
<div className='scheduleTop'>
    <img src={arrowLeft} alt="" />
    <h2>Schedule Your Orders</h2>
    <p>Reserve a peaceful environment where you can fully 
        engage with your pntly accomplish tasks to 
        enhance productivity for any duration of time.</p>
        
</div>
<div className='formsWrapper'>
    <form action="">
        <div className='formTop'>
            <div>
            <label htmlFor="">First Name</label>
            <input type="text" /> 
            </div>
            <div>
            <label htmlFor="">Last Name</label>
            <input type="text" />
            </div>
           
            </div>
            <div className='forms'>
            <label htmlFor="">Company's Name</label>
            <input type="text" />
            <label htmlFor="">Email Address</label>
            <input type="email" />
            <label htmlFor="">Phone Number</label>
            <input type="number" />
            <label htmlFor="">Desired Membership</label>
            <select id="membership" name="membership" className='membership'>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="random">Random</option>
      <option value="daily">Daily Orders</option>
    </select>
    <div className='check'>
    <input type="checkbox" id="agree" name="agree"/>
    <label for="agree">I’d love to know more about your company. I understand and agree to your <span>Privacy Policy</span></label>
    </div>
   
    </div>
    <div className='scheduleBtn'> <Button >Send Message</Button></div>
   
    </form>
    </div>
</div>
    </div>
  )
}

export default ScheduleOrder