import {GoogleLogin} from 'react-google-login';
import { Navigate } from 'react-router-dom';

const clientId = "926290861372-26kkthps3hif1sjura8vectatnnk0sm3.apps.googleusercontent.com";


function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:  ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single host origin"}
                isSignedIn={true}
            />
        </div>
    ) 


}

export default Login;