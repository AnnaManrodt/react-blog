import React, { useState } from 'react';

export default function Form() {
    // Step 1: Define the state to store form data
    const [formData, setFormData] = useState({
        userName: '',
        title: '',
        content: ''
    });

    // Step 2: Handle input change for each form field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value // Update specific field based on input name
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission (page reload)
        console.log('Form submitted with data:', formData);

        // Optionally reset form data after submission
        setFormData({
            userName: '',
            title: '',
            content: ''
        });
    };

    return (
        <div className="form-container">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
