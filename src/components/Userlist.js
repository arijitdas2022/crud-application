import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Userlist = () => {
    const [users, setUsers] = useState([]);
//    const params=useParams();
//    const [id,setId]=useState()

    // const fetchUserById = (id) => {
    //     fetch(`http://localhost:3004/user/${id}`, {
    //         method: "GET"
    //     })
    //     .then(res => res.json())
    //     .then(data => setUsers(prevUsers => prevUsers.map(user => user.id === id ? data : user)));
    // }
    const getUsers = () => {
        fetch('http://localhost:3004/user/')
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    useEffect(() => {
       
        getUsers();
    }, []);

    const deleteuser=(id)=>{
        fetch('http://localhost:3004/user/'+id,{
            method:"DELETE"
        }).then(response=>
            {
                if(!response.ok){
                    throw new Error()
                }
                getUsers()
                alert("Deleted Successfully")
            }
            ).catch(error=> {
            alert("unable to delete")
        })
    }
    return (
        <div>
            <Link to='/user/add' className='btn btn-primary'>Add</Link>
            <table className='table-dark'>
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='border-primary'>
                    {
                        users.map((user, index) => {
                            const { id, name, age, location } = user;
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{location}</td>
                                    <td>
                                        <Link className='btn btn-success' to={`/user/update/${id}`}>Update</Link>&nbsp;
                                        <button className='btn btn-danger' onClick={()=>deleteuser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Userlist;
