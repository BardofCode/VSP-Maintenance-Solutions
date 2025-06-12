import React, {useState} from 'react';

function Login() {
    const[inputValue, setValue]=useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert('Submission!');
    }

        return (
            <div className='login_form'>
                <form onSubmit={handleSubmit}>
                    <input id='uid' type='text' placeholder='UID' required='true'/>
                    <input id='password' type='password' placeholder='pasword' required='true'/>
                    <select>
                        <option>Admin</option>
                        <option>User</option>
                        <option>Worker</option>
                    </select>

                    <button type='submit' id='verify_details'>Login</button>
                </form>

            </div>
        )
}

export default Login;