// Imports necessary Functions & Dependencies
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// Creates a Form
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('Please fill out all forms before submitting');
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        alert(`Thank you for submitting, ${name}!`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h2>Send me your feedback!</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="name"
                    className="form-control"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    className="form-control"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="message"
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}