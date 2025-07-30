'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ContactSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const timeSlots = [
    '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = selectedDate.toLocaleDateString();
    console.log({ email, message, selectedDate: formattedDate, selectedTime });
    alert('Appointment request submitted!');
    setEmail('');
    setMessage('');
    setSelectedTime('');
    setSelectedDate(new Date());
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select a Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select a Time Slot</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">-- Choose a time --</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Tell us about your problem or idea..."
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
