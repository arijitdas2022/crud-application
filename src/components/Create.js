import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [id,setId]=useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [location, setLocation] = useState("")
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
        const empData = { id,name, age, location };

        fetch('http://localhost:3004/user/',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empData)
        }).then(res=>  alert('Saved successfully.'),
navigate('/users')
    )
        .catch(err=> console.err("data not found"))
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <label>Id</label>
            <input type="text" value={id}  onChange={(e)=>setId(e.target.value)}></input>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>Age</label>
                <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
                <label>Location</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}></input>
                <button>Save</button>
            </form>

        </div>
    )
}

export default Create