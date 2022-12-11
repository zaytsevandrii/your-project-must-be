import { useRef, useState } from "react"
import Container from "./Container"
import "./App.scss"

function App() {
  const ref = useRef()
  const [checkBox,setCheckBox] = useState([
    {id:1,box:false,title:'Good',clas:'good'},
    {id:2,box:false,title:'Cheap',clas:'cheap'},
    {id:3,box:false,title:'Fast',clas:'fast'},
  ])
  console.log(checkBox[0].box)
  
  function onCheck(id){
   
    setCheckBox(checkBox.map(el=>(
      if(checkBox[0].box&&checkBox[1].box&&checkBox[2].box){
        console.log(id,el)
      }else{
        console.log('dsds')
      }
    )))
  }
    return (
        <div className="App">
            <h1>How do you want your project to be?</h1>
           {checkBox.map(el=>(
            <Container  key={el.id} {...el} onCheck={onCheck}/>
           ))}
        </div>
    )
}

export default App
