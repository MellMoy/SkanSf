import Header from "./component/results/header";
import Footer from  "./component/loginpage/footer";
import Main from "./component/results/main";


import "./style/results.css";
import "./style/loginpage/footer.css";
import "./style/results/header.css";
import "./style/results/main.css";




function Results() {
    return (
      <div className="Results__css">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
  export default Results;