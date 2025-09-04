import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import heroImage from '../../public/images/WhatsApp Image 2025-09-04 at 9.43.24 AM (1).jpeg';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '' });
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<string>('10:00');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time) {
      alert('Please select date and time');
      return;
    }

    const [hours, minutes] = time.split(':').map(Number);
    const start = new Date(date);
    start.setHours(hours, minutes, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const payload = {
      ...form,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
    };

    try {
      const res = await fetch('/api/createBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok) {
        alert('✅ Booking successful! Check your email for confirmation.');
        setForm({ name: '', email: '', phone: '', reason: '' });
        setDate(new Date());
        setTime('10:00');
      } else {
        alert('❌ Booking failed: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('⚠️ Something went wrong. Please try again later.');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Wellness,<br />Transforming Lives.
          </h1>
          <p className="text-gray-600 mb-6">
            At Sifa Health, we deliver personalized mental health care with compassion and evidence-based treatments.
          </p>
          <Link href="/services" className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
            View Services
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src={heroImage} alt="Mental health support" className="rounded-lg w-full h-auto" />
        </div>
      </section>

      {/* We Value Section */}
      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">We Value</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Empowering Wellness, Transforming Lives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            ["Diagnose", "Identify root causes with clarity and care."],
            ["Treatment", "Delivering expert, evidence-based support."],
            ["Empower", "Promoting long-term mental wellness and resilience."]
          ].map(([title, desc], i) => (
            <div key={i}>
              <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">We're Always Ready to Help</h3>
          <p className="text-xl text-gray-600 mb-8">Take the first step towards better mental health and book an appointment</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="https://calendly.com/katiesanger/30min" 
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Quick Book Online
            </Link>
            <button 
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg shadow-lg border-2 border-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Fill Out Form Below
            </button>
          </div>
          
          {/* <div id="booking-form" className="bg-white rounded-xl shadow-xl p-8">
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Schedule Your Appointment</h4>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <input
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                placeholder="Full Name *"
                className="p-4 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                required
                onChange={handleChange}
                placeholder="Email Address *"
                className="p-4 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input
                name="phone"
                value={form.phone}
                required
                onChange={handleChange}
                placeholder="Phone Number *"
                className="p-4 border-2 border-gray-200 rounded-lg col-span-1 md:col-span-2 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <textarea
                name="reason"
                value={form.reason}
                required
                onChange={handleChange}
                placeholder="Reason for Appointment *"
                className="p-4 border-2 border-gray-200 rounded-lg col-span-1 md:col-span-2 h-32 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
              <div className="col-span-1 md:col-span-2">
                <label className="block mb-2 text-gray-700 font-medium">Preferred Date:</label>
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select your preferred date"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block mb-2 text-gray-700 font-medium">Preferred Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 col-span-1 md:col-span-2"
              >
                Submit Appointment Request
              </button>
            </form>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Sifa Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["Holistic Approach", "We treat the whole person, not just symptoms."],
            ["Experienced Team", "Care from certified professionals with years of expertise."],
            ["Personalized Care", "Tailored solutions to meet your unique needs."],
            ["Compassionate Support", "Empathy and understanding at every step."],
            ["Cutting-Edge Treatments", "Modern therapies backed by research."],
            ["Collaborative Care", "We build trust and work together for better outcomes."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">What Makes Us Proud</h3>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700">
          "I struggled with depression for years, but the team at Sifa Health treated me with such care and understanding.
          Their personalized treatment plan has made a world of difference. I feel hopeful and empowered for the first time in years."
        </blockquote>
        <p className="mt-4 font-semibold text-gray-700">— Stevene Gitau, Golden Lotus Apartment, Nairobi, Kenya</p>
      </section>
    </Layout>
  );
};

export default Home;