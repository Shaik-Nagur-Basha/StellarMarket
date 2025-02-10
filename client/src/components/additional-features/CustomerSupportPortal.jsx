// components/CustomerSupportPortal.js
import React, { useState } from 'react';

function CustomerSupportPortal() {
  const [tickets, setTickets] = useState([]);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: Date.now(),
      subject,
      description,
      status: 'Open',
    };
    setTickets([newTicket, ...tickets]);
    setSubject('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Customer Support Portal</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Submit a Ticket</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-300"
          >
            Submit Ticket
          </button>
        </form>
        <h2 className="text-2xl font-bold mb-4">Your Tickets</h2>
        {tickets.length === 0 ? (
          <p className="text-center text-gray-600">No tickets submitted yet.</p>
        ) : (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id} className="border-b py-2">
                <h3 className="font-semibold">{ticket.subject}</h3>
                <p className="text-gray-700">{ticket.description}</p>
                <p className="text-sm text-gray-500">Status: {ticket.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CustomerSupportPortal;
