// components/SEOManager.js
import React from 'react';
import { Helmet } from 'react-helmet';

function SEOManager({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default SEOManager;
