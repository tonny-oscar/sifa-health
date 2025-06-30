import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import contactImage from '../../public/images/sifa.webp'; // Only this image remains

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-100 text-gray-700 py-10 px-6 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">Welcome to Sifa Health</h2>
        <p className="text-2xl font-medium text-gray-800 py-2">Holistic Mental Wellness</p>
        <p className="max-w-3xl mx-auto md:mx-0">
          At Sifa Health, we diagnose and treat mental health conditions using a holistic,
          person-centered approach. Beyond prescribing medication, we collaborate closely with
          our clients to address every area of life that affects mental well-being.
        </p>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-100 text-gray-700 py-8 px-4 flex flex-col md:grid grid-cols-2 items-center text-center">
        <p className="justify-self-center max-w-[1000px] col-span-2 mb-4 text-lg">
          Our services cover a broad range of mental health needs, tailored to each individual's
          unique journey toward lasting wellness and improved quality of life. We treat conditions such as:
        </p>
        <div className="justify-self-center max-w-[1200px] flex flex-col items-center col-span-2 bg-white border border-gray-200 rounded p-6 shadow-sm">
          <ul className="list-disc text-left max-w-[500px]">
            <li>Anxiety & Panic Disorders</li>
            <li>Depression</li>
            <li>Bipolar Disorder</li>
            <li>Obsessive-Compulsive Disorder (OCD)</li>
            <li>Substance Use Disorders</li>
            <li>Post-Traumatic Stress Disorder (PTSD)</li>
            <li>Alcohol Dependence</li>
            <li>Binge Eating Disorders</li>
            <li>Insomnia & Sleep Issues</li>
            <li>Menopausal Mood Disorders</li>
            <li>Sexual Dysfunction</li>
            <li>Anger Management</li>
          </ul>
        </div>

        {/* Philosophy Quote */}
        <p className="text-lg md:text-xl italic font-semibold justify-self-center max-w-[1000px] mt-6 col-span-2 text-gray-600">
          “Our commitment goes beyond symptom relief — we strive to uncover the root of your
          challenges and empower you to take charge of your well-being with confidence and clarity.”
        </p>

        {/* Our Center */}
        <div className="justify-self-center max-w-[1200px] flex flex-col items-center col-span-2 bg-white border border-gray-200 rounded p-6 mt-6 shadow-sm">
          <p className="max-w-[1000px] text-center md:text-left">
            Our center is a sanctuary for healing — a safe, supportive space where you are heard,
            valued, and cared for. We blend modern clinical expertise with a holistic approach to
            mind, body, and spirit. Whether you seek diagnosis, short-term support, or long-term
            care, we’re here to guide you toward a fulfilling, healthier life.
          </p>
        </div>

        {/* Meet the Expert */}
        <div className="col-span-2 flex flex-col items-center mt-10 text-center text-gray-700">
          <h3 className="text-2xl font-semibold mb-2">Meet Our Expert</h3>
          <p className="text-lg font-light max-w-[700px]">
            <strong>Paul Langat, PMHNP-BC</strong> is a dual board-certified Psychiatric and
            Adult-Gerontology Nurse Practitioner with over a decade of healthcare experience. Paul
            focuses on restoring balance and meaning in patients’ lives through compassionate,
            personalized mental health care.
          </p>
        </div>

        {/* Contact Info with Image */}
        <div className="col-span-2 flex flex-col-reverse md:flex-row items-center justify-around mt-10 text-center bg-gray-200 p-6 rounded-md shadow-md w-full max-w-5xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Contact Sifa Health</h3>
            <p className="text-md mt-1">📍 Eka Massachusetts</p>
            <p className="text-md">📞 +1 857 413 9238</p>
            <p className="text-md">📧 info@sifahealth.com</p>
          </div>
          <Image
            className="w-full md:w-[300px] h-auto object-cover rounded-md mb-4 md:mb-0"
            src={contactImage}
            alt="Sifa Health Contact"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
