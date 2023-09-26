import {Component} from 'react'
import './index.css'

class OTPVerificationScreen extends Component{
    constructor(props){
        super(props)
        this.state={otp:'',generatedOTP:''}
    }

    componentDidMount(){
        const generatedOTP =  Math.floor(1000 + Math.random() * 9000)
        this.setState({generatedOTP: generatedOTP.toString()})
    }

    handleVerify = () => {
        if(this.state.otp === this.state.generatedOTP){
            this.props.onVerify(true)
        }
        else{
            alert("Invalid OTP")
        }
    }

    render(){
        return (
            <div className='container'>
                <img src = "https://res.cloudinary.com/ddtoi0jtp/image/upload/v1695708506/otpp_wwdhel.avif" className='logo' alt="logo" />
                <h1 className='heading'>Please verify mobile number</h1>
                <p className='otp-text'>An OTP is sent to {this.props.mobilenumber}</p>
                <button className='change-number'>Change Phone number</button>
                <input type="text" value={this.state.otp} 
                onChange={(event) => this.setState({otp:event.target.value})} />
                <div className='card'>
                    <p className='not-send-text'>Didn't receive the code?</p>
                    <button className='resend-btn'>Resend</button>
                </div>
                <button className='button' onClick={this.handleVerify}>Verify</button>
            </div>
        )
    }
}

export default OTPVerificationScreen