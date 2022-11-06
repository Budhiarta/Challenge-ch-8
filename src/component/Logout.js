import {GoogleLogout} from 'react-google-login';

const clientId = "926290861372-26kkthps3hif1sjura8vectatnnk0sm3.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }
    
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;