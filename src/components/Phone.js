import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h2>Single Phone</h2>
            <h4>Name: {phone.name}</h4>
        </div>
    );
};

export default Phone;