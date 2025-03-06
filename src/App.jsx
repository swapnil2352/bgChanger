import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={()=> setcolor("brown")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
