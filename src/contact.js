import React, { useState } from 'react';
import './contact.css';
import Header from './header';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.error('Failed to send email');
            }
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <div  id="wholePage">
            <h1><Header/></h1> 
            <div id="contactInfo">
                CONTACT<br></br>
                Reach Me Anytime

                For any questions or inquiries, you can find me at:<br></br>
                Bonita Springs, FL, 34135<br></br>
                630-212-9580<br></br>
                laurisnotaryservices@gmail.com
    
                <h2  id="contactUs">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label id="name">Name:</label>
                        <input id="inputName"
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label id="email">Email:</label>
                        <input id="inputEmail"
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label  id="phone">Phone Number:</label>
                        <input id="inputPhone"
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label id="message">Message:</label>
                        <textarea id="inputMessage"
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button id="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
