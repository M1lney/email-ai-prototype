'use client';

import React, { useState } from 'react';

export default function Page() {
    const [emailType, setEmailType] = useState('');
    const [storeLink, setStoreLink] = useState('');
    const [segment, setSegment] = useState('');
    const [specificDetails, setSpecificDetails] = useState('');
    const [specificProducts, setSpecificProducts] = useState('');
    const [specialOffer, setSpecialOffer] = useState('');
    const [generatedEmail, setGeneratedEmail] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setGeneratedEmail('');


        const requestData = {
            emailType,
            storeLink,
            segment,
            specificDetails,
            specificProducts,
            specialOffer
        };

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            // Handle success: Set the generated email text
            if (response.ok && data.text) {
                setGeneratedEmail(data.text);
            } else {
                setGeneratedEmail('Failed to generate the email.');
            }
        } catch (error) {
            console.error('Error fetching the email:', error);
            setGeneratedEmail('Error generating the email.');
        } finally {
            setLoading(false);
        }


    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex space-x-8 w-full max-w-7xl px-6">
                {/* Form Container */}
                <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
                    <h1 className="text-2xl font-bold text-center mb-4">Generate Email Campaign</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Input fields for email data */}
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={segment}
                            onChange={(e) => setSegment(e.target.value)}
                            placeholder="What segment will you send this email to?"
                        />
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={emailType}
                            onChange={(e) => setEmailType(e.target.value)}
                        >
                            <option value="" disabled>Select email type - Why are you sending this?</option>
                            <option value="product">Product</option>
                            <option value="collection feature">Collection Feature</option>
                            <option value="educational">Educational</option>
                            <option value="social proof/customer">Social Proof/Customer</option>
                            <option value="transformation">Transformation</option>
                            <option value="sale">Sale</option>
                            <option value="business update">Business Update</option>
                            <option value="gift guide">Gift Guide</option>
                            <option value="social media">Social Media</option>
                        </select>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={storeLink}
                            onChange={(e) => setStoreLink(e.target.value)}
                            placeholder="Store link"
                        />
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={specificDetails}
                            onChange={(e) => setSpecificDetails(e.target.value)}
                            placeholder="What specific details does this email need to include?"
                        />
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={specificProducts}
                            onChange={(e) => setSpecificProducts(e.target.value)}
                            placeholder="What products do you want to focus on in this email?"
                        />
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                            value={specialOffer}
                            onChange={(e) => setSpecialOffer(e.target.value)}
                        >
                            <option value="" disabled>What special offer do you want this email to include?</option>
                            <option value="sitewide discount">Sitewide Discount</option>
                            <option value="tiered discount">Tiered Discount</option>
                            <option value="flash sales">Flash Sales</option>
                            <option value="single product discount">Single Product Discount</option>
                            <option value="buy one get one free">Buy One Get One Free</option>
                            <option value="best-seller sale">Best-Seller Sale</option>
                            <option value="category discount">Category Discount</option>
                            <option value="seasonal collection discount">Seasonal Collection Discount</option>
                            <option value="launch discount">Launch Discount</option>
                            <option value="early access discount (vip)">Early Access Discount (VIP)</option>
                            <option value="weekend only sale">Weekend Only Sale</option>
                            <option value="volume discount(e.g. buy 3 get 15% off)">Volume Discount (e.g. buy 3 get 15%
                                off)
                            </option>
                            <option value="spin to win">Spin to Win</option>
                            <option value="mystery discount">Mystery Discount</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Generated Email Container */}
                <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
                    <h2 className="text-xl font-bold">Generated Email:</h2>
                    <div className="mt-4 text-black whitespace-pre-wrap">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>{generatedEmail || 'No email generated yet.'}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}