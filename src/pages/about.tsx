import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import centerImage from '../../public/images/seated.png';
import facilityImage from '../../public/images/light.jpg';
import approachImage from '../../public/images/maleki.jpg';
import contactImage from '../../public/images/sifa.webp'; // NEW: imported contact image

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-100 flex flex-col items-center md:flex-row md:justify-between">
        <Image
          className="h-[300px] md:h-[550px] w-[90vw] md:w-[50vw] object-cover opacity-80"
          src={approachImage}
          alt="Sifa Health facility"
        />
        <article className="p-4 px-[5%] flex flex-col text-center md:text-start">
          <h2 className="signature text-4xl">Welcome to Sifa Health</h2>
          <p className="text-2xl py-2">Holistic Mental Wellness</p>
          <p className="max-w-full md:max-w-[500px]">
            At Sifa Health, we diagnose and treat mental health conditions using a holistic,
            person-centered approach. Beyond prescribing medication, we collaborate closely with
            our clients to address every area of life that affects mental well-being.
          </p>
        </article>
      </div>

      {/* Services Overview */}
      <div className="p-4 flex flex-col md:grid grid-cols-2 items-center text-center">
        <p className="justify-self-center max-w-[1000px] col-span-2 m-2 text-lg">
          Our services cover a broad range of mental health needs, tailored to each individual's
          unique journey toward lasting wellness and improved quality of life. We treat conditions
          such as:
        </p>
        <div className="justify-self-center max-w-[1200px] flex flex-col md:flex-row justify-around items-center col-span-2 bg-yellow-700/5">
          <Image
            className="w-[300px] max-w-[100vw] md:w-[50%] md:max-w-[500px] max-h-[400px] p-2 object-cover opacity-80"
            src={centerImage}
            alt="Therapy session or wellness setting"
          />
          <ul className="list-disc text-left max-w-[500px] p-4">
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
        <p className="text-lg md:text-xl italic font-semibold justify-self-center max-w-[1000px] m-2 md:my-12 col-span-2">
          “Our commitment goes beyond symptom relief — we strive to uncover the root of your
          challenges and empower you to take charge of your well-being with confidence and clarity.”
        </p>

        {/* Our Center */}
        <div className="justify-self-center max-w-[1200px] flex flex-col-reverse md:flex-row justify-around items-center col-span-2 bg-rose-50/30">
          <p className="max-w-[1000px] m-4 md:w-[50%]">
            Our center is a sanctuary for healing — a safe, supportive space where you are heard,
            valued, and cared for. We blend modern clinical expertise with a holistic approach to
            mind, body, and spirit. Whether you seek diagnosis, short-term support, or long-term
            care, we’re here to guide you toward a fulfilling, healthier life.
          </p>
          <Image
            className="w-[100vw] md:w-[50%] md:max-w-[500px] max-h-[500px] p-2 object-cover opacity-80"
            src={facilityImage}
            alt="Sifa Health center interior or staff"
          />
        </div>

        {/* Meet the Expert */}
        <div className="col-span-2 flex flex-col items-center mt-8 text-center">
          <h3 className="text-2xl font-semibold">Meet Our Expert</h3>
          <p className="text-lg font-light mt-2 max-w-[700px]">
            <strong>Paul Langat, PMHNP-BC</strong> is a dual board-certified Psychiatric and
            Adult-Gerontology Nurse Practitioner with over a decade of healthcare experience. Paul
            focuses on restoring balance and meaning in patients’ lives through compassionate,
            personalized mental health care.
          </p>
        </div>

        {/* Contact Info with Image */}
        <div className="col-span-2 flex flex-col-reverse md:flex-row items-center justify-around mt-10 text-center bg-gray-100 p-6 rounded-md shadow-md w-full max-w-5xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
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
