import  React, {useState,useEffect} from 'react'
import axios from 'axios'

function Profile() {
    const [show, setShow] = useState(true)
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [data, setData] = useState([])
   
    
    const minus = () => {

        
        setCount(count-1)
      

       
    }
   
    const toggleHandler = () => {
    
        setCount(count+1)
    }
    const toggleShow = () => {
        setShow(!show )
    }
    useEffect(()=>{
      // axios.get('https://jsonplaceholder.typicode.com/users')
      // .then(res => setData(res.data))
      // .catch(err => console.log(err))
      const getData = async () => {
        try {
          const myData = await axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(myData)
          setData(myData.data)
        } catch (error) {
          console.log(error)
        }
      }
      getData()
    },[])
    return (
        <div>
            {show? <div> 
              <button onClick={()=>minus()}>
                -
              </button>
              <span>
                {count>0?count:0}
                {data.map(el => <span>{el.name}</span>)}
              </span>
            
              <button onClick={()=>toggleHandler()}>
                +
              </button>
            
          </div>: ''}
            <button onClick ={()=>toggleShow()}>
                {show? "hide":"show"}
            </button>
            <input onChange={(e)=> setName(e.target.value)} /><br></br>
            <span>This is the value of input : {name}</span>
        </div>
  
      )
}

export default Profile