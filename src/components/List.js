import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom'

function List() {
    const [users, setusers] = useState([])
    useEffect(
        ()=>{axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        console.log(res.data)
        setusers(res.data)

    })
    .catch((err)=>console.log(err))

},[]
    )
    
    return (
        <div className='list'>
            {
                users.map(
                    (item)=>(
                        <div><Link to={`/users/${item.id}`}>{item.name}</Link></div>
                    )
                )
            }
        </div>
    )
}

export default List
