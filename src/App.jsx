import Header from "./component/header";
import Footer from "./component/footer";
import Main from "./component/main";


import "./style/header.css"
import "./style/footer.css"
import "./style/main.css"



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
