import Header from "./component/results/header";
import Footer from  "./component/loginpage/footer";


import "./style/results.css"
import "./style/loginpage/footer.css";
import "./style/results/header.css"


function Results() {
    return (
      <div className="Results">
        <Header/>
        <Footer/>
      </div>
    );
  }
  
  export default Results;