import Header from "./component/loginpage/header";
import Footer from  "./component/loginpage/footer";
import Main from "./component/loginpage/main";

import "./style/loginpage/main.css";
import "./style/applogin.css"
import "./style/loginpage/footer.css";

function LoginPage() {
    return (
      <div className="Loginpage">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
  export default LoginPage;