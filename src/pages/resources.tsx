import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import resourceImage from '../../public/images/WhatsApp Image 2025-09-04 at 9.43.24 AM.jpeg';

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="bg-gray-100 py-12 px-6 text-center font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 font-serif">Patient Resources</h1>
          <p className="text-2xl font-medium text-gray-700 mb-6 font-sans">Live Your Life to the Fullest</p>
        </div>
      </section> */}

      {/* Insurance Section */}
      <section className="bg-white py-12 px-6 font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 text-center md:text-left text-gray-800 font-serif">We Accept Insurance</h2>
              <p className="text-center md:text-left text-xs text-gray-400 mb-4 italic">
                Mind your mind, live to the fullest
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src={resourceImage} alt="Mental health support" className="rounded-lg w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-serif">Major Insurance Plans</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• Cigna</li>
                <li>• UnitedHealthcare</li>
                <li>• Medicare & Medicaid</li>
                <li>• And many more</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-serif">Verification Process</h3>
              <p className="text-gray-700 mb-4">
                We recommend verifying your coverage before your first appointment. Our team will help you understand:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Your copay amount</li>
                <li>• Deductible requirements</li>
                <li>• Coverage limitations</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Payment Options */}
      <section className="bg-gray-50 py-12 px-6 font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-serif">Payment Options</h2>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-serif">Accepted Payment Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All major credit cards (Visa, MasterCard, American Express)</li>
                  <li>• HSA (Health Savings Account)</li>
                  <li>• FSA (Flexible Spending Account)</li>
                  <li>• Debit cards</li>
                  <li>• Cash payments</li>
                  <li>• Payment plans available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-serif">Self-Pay Options</h3>
                <p className="text-gray-700 mb-4">
                  We offer competitive self-pay rates for those without insurance or who prefer to pay directly.
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Payment is due at the time of service unless prior arrangements have been made.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      Additional Resources
      <section className="bg-white py-12 px-6 font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-serif">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 font-serif">Patient Forms</h3>
              <p className="text-gray-600 text-sm mb-4">Download and complete forms before your visit</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Download Forms
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 font-serif">Appointment Policies</h3>
              <p className="text-gray-600 text-sm mb-4">Learn about our scheduling and cancellation policies</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Policies
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 font-serif">Mental Health Resources</h3>
              <p className="text-gray-600 text-sm mb-4">Helpful links and educational materials</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Resources;