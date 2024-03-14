import { Service } from '@/utils/types';
import Link from 'next/link';
import React from 'react';

const Services = ({services, category}: {services: Service[], category: string}) => {
  return (
    <div className='flex flex-col p-4'>
      {services.map((service) => (
        <div className='py-2' key={service.name}>
          <h3 className='text-xl font-semibold italic'>{service.name}</h3>
          <p>{service.description}</p>
          <p>
            Price: <span className='josefin italic'> {service.price}</span>
          </p>
        </div>
      ))}
      {category === 'astrology' ? (
        <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='self-center border-black josefin border-b-[1px] py-2 px-5 mt-4'>
          BOOK A FREE CLARITY CALL
        </Link>
      ) : (
        <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='self-center border-black josefin border-b-[1px] py-2 px-5 mt-4'>
          BOOK A FREE CLARITY CALL
        </Link>
      )}
    </div>
  );
};

export default Services;
