'use client';

import React from 'react';

export default function ContactUs() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-screen font-light text-gray-800">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We're here to help. Reach out to us through any of the following methods, and we’ll get back to you promptly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 border-b-4 border-purple-600 inline-block pb-2">
            Get in Touch
          </h2>

          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>
                <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>
                <a href="mailto:support@easystanrepairs.com" className="text-indigo-600 hover:underline">
                  support@easystanrepairs.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 EasyStan St, Kathmandu, Nepal</p>
            </div>

            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex gap-6 mt-2 text-indigo-600 text-2xl">
                <a href="https://facebook.com/easystan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook"></i> {/* Replace with react-icons if you prefer */}
                  FB
                </a>
                <a href="https://twitter.com/easystan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  TW
                </a>
                <a href="https://instagram.com/easystan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  IG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-auto">
          <iframe
            title="EasyStan Repairs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.320123456789!3d27.700123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1935f07de11b%3A0x9f1234567890abcdef!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
