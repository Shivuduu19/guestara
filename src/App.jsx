
// import './App.css'

import { useState } from "react"
import Month from "./components/Month"
import Topbar from "./components/Topbar"
import { getMonth, getCurrentMonth } from "./utils"
import Resouce from "./components/Resouce"


function App() {
  const [curretnMonth, setCurrentMonth] = useState(getCurrentMonth())
  // console.log(curretnMonth);

  return (
    <div className="overflow-auto">

      <Topbar />


      <div className="flex ">
        <div className="min-w-44  border-2 border-r-0 border-b-0 border-cyan-500" />
        <Month month={curretnMonth} />
      </div>

      <div>
        <Resouce nofDays={curretnMonth} />

      </div>
    </div>
  )
}

export default App
