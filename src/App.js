import {Component} from 'react'
import './App.css'
import MobileNumberScreen from './components/MobileNumberScreen'
import OTPVerificationScreen from './components/OTPVerificationScreen'
import SuccessScreen from './components/SuccessScreen'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            screen: 1,
            mobilenumber: '',
            isVerified: false
        }
    }

    handleNumber = (number) => {
        this.setState({mobilenumber: number,screen:2})
    }

    handleVerify = (verification) => {
        if(verification){
            this.setState({isVerified:true,screen:3})
        }
        else{
            this.setState({screen:1})
        }
    }

    render(){
        return (
            <div className='container'>
                {this.state.screen === 1 && <MobileNumberScreen onNext={this.handleNumber} />}
                {this.state.screen === 2 && (
                    <OTPVerificationScreen mobilenumber={this.state.mobilenumber}
                    onVerify = {this.handleVerify} />
                )}
                {this.state.screen === 3 && <SuccessScreen />}
            </div>
        )
    }
}

export default App