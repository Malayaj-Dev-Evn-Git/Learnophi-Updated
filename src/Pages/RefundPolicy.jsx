import React from "react";

const RefundPolicy = () => {
  return (
    <div className="pt-20 mt-10 shadow-md  max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4"><strong>Effective Date:</strong> 15th May 2025</p>

      <p className="mb-4">
        At Learnophi, we are committed to providing a high-quality learning
        experience for all our students. We understand that sometimes plans
        change. This Refund Policy outlines the conditions under which you may
        request a refund for the Azure Data Engineering Masterclass.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Eligibility for Refund</h2>
      <p className="mb-4">
        A full refund is available under the following conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>You request a refund within 3 days of the course start date.</li>
        <li>You have not attended more than one live session.</li>
        <li>You provide a valid reason for the request.</li>
      </ul>
      <p className="mb-4">
        After this initial 3-day window, we do not offer refunds under normal
        circumstances.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Non-Refundable Situations</h2>
      <p className="mb-4">
        We do not provide refunds in the following situations:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>You fail to attend or participate in the course sessions.</li>
        <li>You change your mind after accessing course materials.</li>
        <li>You are dissatisfied without providing specific feedback or giving us a chance to resolve issues.</li>
        <li>You request a refund after course completion.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Refund Request Process</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Email us at <strong>support@learnophi.com</strong> with the subject line “Refund Request”.</li>
        <li>Include your full name, registered email, payment proof, and reason for the refund.</li>
        <li>Our team will review your request within 3–5 business days.</li>
        <li>If approved, the refund will be processed within 7 business days.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Payment Method for Refunds</h2>
      <p className="mb-4">
        Refunds will be issued using the original payment method (e.g., UPI, credit card). Processing time depends on your bank or payment provider.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Exceptions</h2>
      <p className="mb-4">
        In rare cases such as technical issues, duplicate payments, or genuine
        hardship situations, partial or full refunds may be considered at our
        discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Cancellation by Learnophi</h2>
      <p className="mb-4">
        If Learnophi cancels a course due to unforeseen circumstances, all
        enrolled students will receive a full refund or the option to transfer
        to a future batch.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        For questions about this policy or to initiate a refund request, contact us at:
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

export default RefundPolicy;
