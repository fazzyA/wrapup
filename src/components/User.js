import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom'
function User() {
        let {id} =useParams();
const [user, setuser] = useState({})

    useEffect(
        () => {
     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res)=>{
         console.log(res.data)
         setuser(res.data)

     })
     .catch(err=>console.log(err))

    }, [])
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            {/* <p>{user.address.street}</p> */}
            {/* <p>{user.company['name']}</p> */}
            </div>
    )
}

export default User
