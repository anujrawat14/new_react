import './App.css'
import Card from './components/card'



function App() {

  let myobj = {
    useernmae: "anuj",
    age: 12
  }
  let newarr=[1,2,3]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

      {/* Heading */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-8 text-2xl font-bold">
        Tailwind test
      </h1>

      {/* Card */}
      <Card username="chai aur code" btntxt="visitme"  someobj={myobj}  myarr={newarr} />
      <Card  username="anuj" btntxt="clickme"/>
      <Card/>
    </div>
  )
}

export default App