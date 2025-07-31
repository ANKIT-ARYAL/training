'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit triggered');
    const payload = {
      name,
      email,
      message,
      date: selectedDate.toISOString(),
      time: new Date(`${selectedDate.toDateString()} ${selectedTime}`).toISOString()
    };
console.log('Payload:', payload);
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        alert('Appointment request submitted!');
      } else {
        alert('Something went wrong. Please try again.');
        console.error(data.error);
      }
    } catch (err) {
      alert('Failed to send. Check your connection.');
      console.error('Submit failed', err);
    }

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setSelectedTime('');
    setSelectedDate(new Date());
  };

  return (
    <section className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        />

        <div className="flex gap-4">
          <div>
            <label className="block mb-1 text-sm">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Select Time</label>
            <input
              type="time"
              className="border p-2 rounded w-full"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
