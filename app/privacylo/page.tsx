import React from 'react';

const PrivacyloPage = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-semibold">Tef Policy</h1>
        <p className="text-gray-600">
          Your use of our website, <a href="https://dipass.io" className="text-blue-500 hover:underline">https://dipass.io</a>, and its services are subject to this privacy policy.
        </p>
        <p className="text-gray-600 mt-4">
          This policy was last updated on 18 October 2023.
        </p>

        <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
        <p className="text-gray-600">
          We collect various types of information, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-600 pl-6 mt-2">
          <li>User content</li>
          <li>Cookies and other tracking technologies</li>
          <li>Information you share on social media</li>
        </ul>
        <p className="text-gray-600 mt-4">
          We collect, hold, use, and disclose this information for the purposes outlined in this policy.
        </p>
        <p className="text-gray-600 mt-4">
          Please be aware that your use of our services implies your consent to this data collection.
        </p>

        <h2 className="text-xl font-semibold mt-6">Security</h2>
        <p className="text-gray-600">
          When we make changes to this policy, we will provide notice and update the revision date.
        </p>
        <p className="text-gray-600 mt-4">
          Although we will protect your information to the best of our ability, no data transmission or storage is completely secure. You are encouraged to use our services with caution.
        </p>

        <h2 className="text-xl font-semibold mt-6">How Long We Retain Your Data</h2>
        <p className="text-gray-600">
          The retention time period may depend on various factors, including legal, accounting, or reporting requirements.
        </p>
        <p className="text-gray-600 mt-4">
          However, we will only retain your data for as long as necessary for the purposes described in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6">Third Party Policies</h2>
        <p className="text-gray-600">
          Dipass.io's services may involve third-party websites or services, each with its own privacy policies.
        </p>
      </div>
    </div>
  );
};

export default PrivacyloPage;