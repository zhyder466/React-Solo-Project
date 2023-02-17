import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Data from '../components/Data'

function App() {
  const Items = Data.map((item) => {
    return (
      <Body
        img={item.img}
        location={item.location}
        title={item.title}
        date={item.startDate + ' - ' + item.endDate}
        description={item.description}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section>{Items}</section>
    </div>
  )
}

export default App
