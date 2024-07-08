import React, { useState } from 'react'

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: ''
        },
        password: '',
        confirmPassword: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1]
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }))
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        const { confirmPassword, ...dataToSubmit } = formData

        try {
            const response = await fetch('http://your-api-endpoint/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            console.log('User created successfully:', data)
        } catch (error) {
            console.error('Error creating user:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8 rounded-md shadow-lg w-full max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">User Registration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">Username:</span>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">First Name:</span>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">Last Name:</span>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>
            </div>

            <h3 className="text-xl font-bold mt-6 text-gray-800">Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">Street:</span>
                    <input
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">City:</span>
                    <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">State:</span>
                    <input
                        type="text"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-700">Postal Code:</span>
                    <input
                        type="number"
                        name="address.postalCode"
                        value={formData.address.postalCode}
                        onChange={handleChange}
                        required
                        className="p-3 rounded border border-gray-300 focus:outline-none"
                    />
                </label>
            </div>

            <label className="flex flex-col">
                <span className="font-semibold mb-2 text-gray-700">Password:</span>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="p-3 rounded border border-gray-300 focus:outline-none"
                />
            </label>

            <label className="flex flex-col">
                <span className="font-semibold mb-2 text-gray-700">Confirm Password:</span>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="p-3 rounded border border-gray-300 focus:outline-none"
                />
            </label>

            <label className="flex flex-col">
                <span className="font-semibold mb-2 text-gray-700">Phone:</span>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="p-3 rounded border border-gray-300 focus:outline-none"
                />
            </label>

            <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded mt-4 hover:bg-blue-600 focus:outline-none">
                Register
            </button>
        </form>
    )
}

export default UserRegistrationForm
