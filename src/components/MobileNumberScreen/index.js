import {Component} from 'react'
import './index.css'

class MobileNumberScreen extends Component{
    constructor(props){
        super(props)
        this.state={mobilenumber:''}
    }

    handleNumber = () => {
        const {mobilenumber} = this.state
        if(mobilenumber.length === 10 && /^\d+$/.test(mobilenumber)){
            this.props.onNext(mobilenumber)
        }
        else{
            alert('Please enter a valid 10 digit mobile number')
        }
    }

    render(){
        return (
            <div className='container'>
                <h1><span className='admit'>Admit{''} </span><span className='Kard'>Kard</span></h1>
                <p className='welcome-text'>Welcome Back</p>
                <p className='text'>Please sign in to the account</p>
                <div className='card'>
                    <select>
                        <option value="+91">India +91</option>
                        <option value="+93">Afganistan +93</option>
                        <option value="+355">Albania #355</option>
                        <option value="+213">Algeria +213</option>
                        <option value="+244">Angola +244</option>
                    </select>
                    <input type="text" placeholder="Enter Contact Number" value={this.state.mobilenumber} onChange={(event) => this.setState({mobilenumber: event.target.value})} />
                </div>
                <div>
                    <p className='sms-text'>We will sent you a one time message. Charges may apply.</p>
                </div>
                <button className='button' onClick={this.handleNumber}>Sign in with OTP</button>
            </div>
        )
    }
}

export default MobileNumberScreen