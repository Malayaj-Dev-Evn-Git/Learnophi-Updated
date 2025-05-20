import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 mt-10 shadow-md  max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4"><strong>Effective Date:</strong>15th May 2025</p>

      <p className="mb-4">
        Learnophi ("we", "our", or "us") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website{" "}
        <a href="https://www.learnophi.com" className="text-blue-600 underline">
          www.learnophi.com
        </a>{" "}
        and enroll in our Azure Data Engineering Masterclass ("Course"). By
        using our services, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>

      <h3 className="font-semibold mt-4">a. Personal Information:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Billing information (e.g., UPI ID, card details)</li>
        <li>Resume or LinkedIn profile (if submitted)</li>
      </ul>

      <h3 className="font-semibold mt-4">b. Non-Personal Information:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Browser type and version</li>
        <li>IP address</li>
        <li>Time zone</li>
        <li>Referring/exit pages</li>
        <li>Device type</li>
      </ul>

      <h3 className="font-semibold mt-4">c. Cookies:</h3>
      <p className="mb-4">
        We use cookies and similar tracking technologies to enhance your
        experience and analyze traffic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To register and enroll you in the course</li>
        <li>To process payments securely</li>
        <li>To send confirmations, reminders, and support messages</li>
        <li>To improve our offerings and customer service</li>
        <li>To share updates, newsletters, or promotions (optional)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell or rent your data. We may share data with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Trusted service providers (e.g., payment, email, analytics)</li>
        <li>Legal authorities if required by law</li>
        <li>Business partners in case of merger/acquisition (with notice)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use technical and organizational safeguards including SSL, encryption,
        and secure access controls to protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention</h2>
      <p className="mb-4">
        We retain your data only as long as necessary for our business and legal
        obligations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access or correct your personal data</li>
        <li>Withdraw consent at any time</li>
        <li>Request deletion of your data</li>
        <li>Request a copy of the data we hold</li>
      </ul>
      <p className="mb-4">Contact us at: <strong>support@learnophi.com</strong></p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to external websites. We are not responsible
        for their content or privacy practices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are not intended for children under 13. We do not knowingly
        collect personal data from them.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Please review it
        periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns, please contact us at:
      </p>
      <p>
        <strong>Learnophi</strong><br />
        Email: support@learnophi.com<br />
        Website: <a href="https://www.learnophi.com" className="text-blue-600 underline">
          www.learnophi.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
