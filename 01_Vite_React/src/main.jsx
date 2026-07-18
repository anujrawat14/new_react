import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1> custom APPs </h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",

//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },

//   children: "tap me to select"
// }
const newuser="rawatji"

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank"
  },
  "Click me to visit Google",
  newuser

)

const newelemnt = (
  <a href='https://google.com' target='_blank'>hello i am new element </a>
)


createRoot(document.getElementById('root')).render(
      // <MyApp/>
      // reactElement this is not working because it is not understanding the structure  of this element
      //  newelemnt //object 
      reactElement
      // <App/>
)
