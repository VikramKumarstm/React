
import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {

  let footerInfo= {
    name:"Vikram kumar",
    course: "BCA"
  }
  

  return (
    <>
      <Header email="vikram@gmail.com" phone="777777777" />
      <div>
        <p>Hero section</p>
      </div>
      <Footer footerInfo={footerInfo} cName="The Vikram" >
        <h1>Welcome to Footer section</h1>
      </Footer>
    </>
  )
}

export default App
