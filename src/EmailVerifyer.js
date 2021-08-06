import {useState} from 'react'

export const EmailVerifyer = props => {
    const [verified, setVerified] = useState('false')

    return (
        <div id='email-verifyer-container'>
            <form>
                <input type='email' defaultValue='email' />
            </form>
        </div>
    )
}