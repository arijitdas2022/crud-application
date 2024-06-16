import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");

    useEffect(() => {
        // Fetch the existing user data
        fetch(`http://localhost:3004/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                setAge(data.age);
                setLocation(data.location);
            })
            .catch(err => console.error("Error fetching user data:", err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { name, age, location };

        fetch(`http://localhost:3004/user/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        })
        .then(res => {
            if (res.ok) {
                alert('Updated successfully.');
                navigate('/users');
            } else {
                throw new Error('Failed to update user data');
            }
        })
        .catch(err => console.error("Error updating user data:", err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                <label>Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Update;
