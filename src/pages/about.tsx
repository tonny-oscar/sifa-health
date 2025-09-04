import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import contactImage from '../../public/images/sifa.webp';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Sifa Health</h1>
          <p className="text-2xl font-medium text-gray-700 mb-6">Holistic Mental Wellness</p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Sifa Health, we diagnose and treat mental health conditions using a holistic,
            person-centered approach. Beyond prescribing medication, we collaborate closely with
            our clients to address every area of life that affects mental well-being.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We prioritize treating the whole person, aim to restore balance and promote well-being
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Path</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Receive personalized care that focuses on your unique needs and circumstances.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your mental health is our priority. Our goal is to help you understand your behaviors and reason for your symptoms and explain different treatment options available to manage your conditions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We combine conventional and functional approach, and integrate holistic psychotherapy to address complex challenges and optimize outcomes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our center is a sanctuary for healing — a safe, supportive space where you are heard,
            valued, and cared for. We blend modern clinical expertise with a holistic approach to
            mind, body, and spirit. Whether you seek diagnosis, short-term support, or long-term
            care, we're here to guide you toward a fulfilling, healthier life.
          </p>
          <blockquote className="text-xl italic font-medium text-gray-600 border-l-4 border-blue-500 pl-6">
            "Our commitment goes beyond symptom relief — we strive to uncover the root of your
            challenges and empower you to take charge of your well-being with confidence and clarity."
          </blockquote>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Conditions We Treat</h2>
          <p className="text-lg text-center mb-8 text-gray-700">
            Our services cover a broad range of mental health needs, tailored to each individual's
            unique journey toward lasting wellness and improved quality of life.
          </p>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Anxiety & Panic Disorders</li>
                <li>• Depression</li>
                <li>• Bipolar Disorder</li>
                <li>• Obsessive-Compulsive Disorder (OCD)</li>
                <li>• Substance Use Disorders</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Post-Traumatic Stress Disorder (PTSD)</li>
                <li>• Alcohol Dependence</li>
                <li>• Binge Eating Disorders</li>
                <li>• Insomnia & Sleep Issues</li>
                <li>• Menopausal Mood Disorders</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Sexual Dysfunction</li>
                <li>• Anger Management</li>
                <li>• Safe and Supportive Space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Expert */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet Our Expert</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-xl text-gray-800">Paul Langat, PMHNP-BC</strong> is a dual board-certified Psychiatric and
              Adult-Gerontology Nurse Practitioner with over a decade of healthcare experience. Paul
              focuses on restoring balance and meaning in patients' lives through compassionate,
              personalized mental health care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-50 rounded-lg p-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Eka Massachusetts
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 857 413 9238
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@sifahealth.com
                </p>
              </div>
            </div>
            <Image
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
              src={contactImage}
              alt="Sifa Health Contact"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;