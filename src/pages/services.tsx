import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImage from '../../public/images/datingscout-DHNgzmiWxD4-unsplash.jpg';

const services = [
  {
    title: 'Anxiety Disorders',
    description: 'Persistent feelings of worry, fear, or unease that interfere with daily activities and overall quality of life.',
  },
  {
    title: 'Depression',
    description: 'A mood disorder characterized by persistent sadness, loss of interest in activities, and changes in energy, sleep, and appetite.',
  },
  {
    title: 'Alcohol Dependence',
    description: 'A chronic condition marked by the inability to control alcohol consumption despite its negative impact on health and relationships.',
  },
  {
    title: 'Bipolar Disorders',
    description: 'A mental health condition causing extreme mood swings, including emotional highs (mania) and lows (depression).',
  },
  {
    title: 'Anger Management',
    description: 'Difficulties in controlling anger that may lead to harmful behaviors or strained relationships.',
  },
  {
    title: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'Recurring, unwanted thoughts (obsessions) and repetitive behaviors (compulsions) performed to reduce distress.',
  },
  {
    title: 'Menopausal Mood Disorders',
    description: 'Mood changes during menopause, including irritability, anxiety, or depression caused by hormonal shifts.',
  },
  {
    title: 'Binge Eating Disorders',
    description: 'Frequent episodes of consuming large amounts of food accompanied by feelings of loss of control and distress.',
  },
  {
    title: 'Insomnia',
    description: 'Difficulty falling or staying asleep, often resulting in fatigue and reduced daytime functioning.',
  },
  {
    title: 'Sexual Dysfunction',
    description: 'Persistent problems with sexual response, desire, or satisfaction that cause distress or relationship issues.',
  },
  {
    title: 'Substance Use Disorders',
    description: 'Recurrent use of alcohol or drugs leading to significant impairment in health, relationships, or daily life.',
  },
  {
    title: 'Post-Traumatic Stress Disorder (PTSD)',
    description: 'Triggered by experiencing or witnessing trauma, causing flashbacks, avoidance, and heightened anxiety.',
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-100 flex flex-col items-center md:flex-row-reverse md:justify-between">
        <Image
          className="h-[300px] md:h-[550px] w-[90vw] md:w-[50vw] object-cover opacity-80"
          src={heroImage}
          alt="Mental health support"
        />
        <article className="p-4 px-[5%] flex flex-col text-center md:text-start">
          <h2 className="text-3xl font-semibold text-gray-900">The Best Solution for Your Mental Health</h2>
          <p className="text-xl py-2 text-gray-700">Services We Provide</p>
          <p className="max-w-full md:max-w-[500px] text-gray-600">
            At Sifa Health, we provide personalized mental health treatment with a compassionate, holistic approach. Explore the wide range of services we offer to support your emotional well-being.
          </p>
        </article>
      </div>

      {/* Services Grid */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="bg-blue-50 py-10 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">Book an Appointment</h3>
        <p className="mb-4 text-gray-700">We provide dedicated support 24/7 for any of your questions or concerns.</p>
        <Link
          href="https://calendly.com/katiesanger/30min"
          target="_blank"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition"
        >
          Make a Reservation
        </Link>

        
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">What Makes Us Proud</h3>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700">
          “I struggled with depression for years, but the team at Sifa Health treated me with such care and understanding.
          Their personalized treatment plan has made a world of difference. I feel hopeful and empowered for the first time in years.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">— Steven Gerrard, Golden Lotus Apartment, Brooklyn, USA</p>
      </section>
    </Layout>
  );
};

export default ServicesPage;
