import React from 'react';

const Page = () => {
    const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 25,
        role: 'User',
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            <div>
                <h2>User Information</h2>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Age: {userData.age}</p>
                <p>Role: {userData.role}</p>
            </div>
        </div>
    );
};

export default Page;
