import { GoogleOAuthProvider } from "@react-oauth/google";

// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  // google OAuth 
  const clientId =
   "398623097944-qdhlmn8t2vvsgl4sqdpi3l5auk67jefc.apps.googleusercontent.com"
    ;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
