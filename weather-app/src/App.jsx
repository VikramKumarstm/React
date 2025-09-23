import { useState } from 'react'
import './App.css'

function App() {

  let [city, setCity] = useState('')
  let [wDetails, setWDetails] = useState()
  let [loading, setLoading] = useState(false)

  let getData = (event) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res) => res.json())
    .then((finalRes) => {
      console.log(finalRes)

      if(finalRes.cod == "404") {
        setWDetails()
      }else {
        setWDetails(finalRes)
      }
      
    })

    event.preventDefault()
    setCity('')
  }

  return (
    <div className='w-[100%] h-[100vh] bg-[#4aacb1] pl-12'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-[40px] font-bold py-[50px] text-white'>Simple Weather App</h1>

        <form onSubmit={getData}>
          <input type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='City Name'
          className='w-[300px] h-[40px] pl-3 bg-white mr-2 rounded-md'
          />
          <button className='bg-[orangered] px-4 py-2 rounded-md'>Search</button>
        </form>

        <div className='w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative'>

          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
           alt="" 
           width={100}
           className='absolute left-[35%]'
           />

          {
            wDetails !== undefined
            ?
            <>
              <h3 className='font-bold text-[30px]'>{wDetails.name} <span>{wDetails.sys.country}</span></h3>
              <h2 className='font-bold text-[40px]'> {wDetails.main.temp} <sup>o</sup>C</h2>
              <img src={`https://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} alt="" className='h-[100px]' />
              <p>{wDetails.weather[0].description}</p>
            </>
            :
            "No Data"
          }
          
        </div>
      </div>
    </div>
  )
}

export default App
