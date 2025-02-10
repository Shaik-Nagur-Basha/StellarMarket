// components/SecurityAuditTool.js
import React, { useState, useEffect } from 'react';

function SecurityAuditTool() {
  const [vulnerabilities, setVulnerabilities] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setVulnerabilities([
        { id: 1, description: 'SQL Injection vulnerability in search feature', severity: 'High' },
        { id: 2, description: 'Cross-Site Scripting (XSS) vulnerability in user comments', severity: 'Medium' },
        { id: 3, description: 'Insecure Direct Object References', severity: 'High' },
        { id: 4, description: 'Missing security headers', severity: 'Low' },
      ]);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Security Audit Report</h1>
        {vulnerabilities.length === 0 ? (
          <p className="text-center text-gray-600">Scanning for vulnerabilities...</p>
        ) : (
          <ul className="list-disc list-inside">
            {vulnerabilities.map(item => (
              <li key={item.id} className="mb-2">
                <span className="font-semibold">{item.severity}:</span> {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SecurityAuditTool;
