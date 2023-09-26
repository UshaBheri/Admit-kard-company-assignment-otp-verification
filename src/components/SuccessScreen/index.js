import {Component} from 'react'
import './index.css'

class SuccessScreen extends Component{
    render(){
        return (
            <div className='container'>
                <img src = "https://res.cloudinary.com/ddtoi0jtp/image/upload/v1695721873/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7_o1mtmd.jpg" className='login-img' alt="login" />
                <h1 className='heading'>Welcome to Admit Kard</h1>
                <p className='description'>In order to provide you with a custom experience</p>
                <p className='text'>We need to ask you a few questions.</p>
                <button className='button'>Get Started</button>
                <p className='last-text'>*This will only take 5 mins.</p>
            </div>
        )
    }
}

export default SuccessScreen