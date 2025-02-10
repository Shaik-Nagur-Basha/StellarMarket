// components/StoreLocator.js
import React from 'react';

function StoreLocator() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Store Locator</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <iframe 
          title="Store Locator Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861834058034!2d-122.40141908468105!3d37.79361717975652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1e0a3ed%3A0x81e72848d8b389d6!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1615476621213!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <p className="text-center text-gray-600 mt-4">Our stores are located across the country.</p>
    </div>
  );
}

export default StoreLocator;
