'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function ContactSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      date: selectedDate.toISOString(),
      time: selectedTime,
    };

    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Appointment request sent successfully!');
        // Reset form
        setFormData({ name: '', phone: '', email: '', message: '' });
        setSelectedDate(new Date());
        setSelectedTime('');
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      alert('Error sending message.');
      console.error(err);
    }
  };

  // Disable past times if selected today
  const getMinTime = () => {
    const now = new Date();
    const selected = new Date(selectedDate);
    return selected.toDateString() === now.toDateString()
      ? now.toTimeString().slice(0, 5) // "HH:MM"
      : '';
  };

  return (
    <section className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white space-y-6">
      <h2 className="text-2xl font-semibold text-center">Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Select Time</label>
          <TimePicker
            onChange={setSelectedTime}
            value={selectedTime}
            disableClock={true}
            format="hh:mm a"
            className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            clearIcon={null}
            minTime={getMinTime()}
          />
        </div>

        {selectedTime && (
          <p className="text-sm text-gray-500">
            You selected <span className="font-medium">{selectedTime}</span>
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-black  text-white font-semibold py-3 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
