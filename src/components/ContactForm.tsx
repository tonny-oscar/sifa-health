'use client';

import { FormEvent, useState } from 'react';
import { sendEmail } from '../utils/apiCall';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendEmail(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Send error:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" required className="border p-2 w-full" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email*" required className="border p-2 w-full" />
      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="border p-2 w-full" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*" required className="border p-2 w-full h-24" />

      <button type="submit" className="bg-black text-white px-4 py-2">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-green-600">✅ Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-600">❌ Failed to send. Try again.</p>}
    </form>
  );
};

export default ContactForm;
