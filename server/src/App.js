import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '812978223661-3smla9u6b9g21fbe8e1khgtdcguh3erp.apps.googleusercontent.com';

  return (

    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
