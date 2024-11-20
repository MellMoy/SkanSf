import Header from "./component/homepage/header";
import Footer from "./component/homepage/footer";
import Main from "./component/homepage/main";


import "./style/homepage/header.css"
import "./style/homepage/footer.css"
import "./style/homepage/main.css"
import "./style/app.css"



function Homepage() {
  return (
    <div className="Homepage">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Homepage;
