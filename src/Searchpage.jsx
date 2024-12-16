// import Header from "./component/loginpage/header";
import Header from "./component/results/header";
import Footer from  "./component/searchpage/footer";
import Main from "./component/searchpage/main";


import "./style/searchpage.css"
import "./style/searchpage/main.css"
import "./style/searchpage/footer.css"
import "./style/results/header.css";


function Searchpage() {
    return (
      <div className="Searchpage">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
  export default Searchpage;