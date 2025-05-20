import React from "react";

const Disclaimer = () => {
  return (
    <div className="pt-20 mt-10 shadow-md  max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="mb-4"><strong>Effective Date:</strong>15th May 2025</p>

      <p className="mb-4">
        The information provided on this website (https://www.learnophi.com)
        and through the Azure Data Engineering Masterclass is intended for
        general educational purposes only. By enrolling in the course or using
        our website, you acknowledge and agree to the following terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. No Guarantees of Employment or Income</h2>
      <p className="mb-4">
        While our program is designed to equip you with industry-relevant
        skills, we do not guarantee job placement, interview calls, or any
        specific salary or income. Success depends on your individual effort,
        background, market demand, and other external factors beyond our
        control.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Educational Use Only</h2>
      <p className="mb-4">
        All course materials, videos, projects, templates, and code samples are
        for educational use only. They should not be treated as professional
        advice, certification, or consultation in any official or legal
        capacity.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. No Professional or Legal Advice</h2>
      <p className="mb-4">
        Nothing on this site or in the course content should be considered
        legal, financial, or career advice. You should consult with a
        professional advisor for your specific situation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Accuracy and Completeness</h2>
      <p className="mb-4">
        We strive to provide accurate and up-to-date information, but we make
        no warranties or representations regarding the completeness, accuracy,
        reliability, or availability of any information, services, or content.
        Technology evolves rapidly, and some content may become outdated over
        time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        Learnophi and its instructors, employees, and partners are not liable
        for any direct, indirect, incidental, or consequential damages that
        arise from the use or inability to use the course, website, or related
        materials.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Third-Party Links and Tools</h2>
      <p className="mb-4">
        Our course or website may link to third-party tools or resources. We are
        not responsible for the content, accuracy, or practices of these
        external sites or services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Copyright and Intellectual Property</h2>
      <p className="mb-4">
        All course content is the intellectual property of Learnophi. You may
        not copy, reproduce, distribute, or share course materials without prior
        written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to this Disclaimer</h2>
      <p className="mb-4">
        Learnophi reserves the right to modify or update this disclaimer at any
        time. Continued use of the website or course after changes indicates
        acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Information</h2>
      <p className="mb-4">
        If you have questions or concerns regarding this disclaimer, contact us:
      </p>
      <p>
        <strong>Learnophi</strong><br />
        Email: support@learnophi.com<br />
        Website:{" "}
        <a href="https://www.learnophi.com" className="text-blue-600 underline">
          www.learnophi.com
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;
