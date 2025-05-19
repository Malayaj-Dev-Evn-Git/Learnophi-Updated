import React from "react";

const AzureCourse = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Azure Data Engineer Career Switch Program
        </h2>

        <p className="text-lg text-center text-gray-600 mb-12">
          A 12-week structured roadmap for freshers and professionals (0–5 years experience) aiming to break into Data Engineering with hands-on Azure cloud training, real-world projects, interview prep, and certification guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phase 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phase 1: Foundation & Cloud Basics (Week 1–2)</h3>
            <p className="text-sm text-gray-600 mb-4">Total Hours: 16 hrs</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Intro to Data Engineering & Cloud</li>
              <li>Azure Storage: Blob, ADLS</li>
              <li>Data Movement: Azure Data Factory</li>
              <li>Hands-on Lab: Azure Setup</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phase 2: Core Azure Data Engineering (Week 3–6)</h3>
            <p className="text-sm text-gray-600 mb-4">Total Hours: 32 hrs</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>ADF Pipelines, ETL & Data Flows</li>
              <li>Azure SQL, Synapse, Data Lakes</li>
              <li>Apache Spark & Databricks</li>
              <li>Azure DevOps & CI/CD Pipelines</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phase 3: Project & Implementation (Week 7–9)</h3>
            <p className="text-sm text-gray-600 mb-4">Total Hours: 24 hrs</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Batch Ingestion Project (ADF + ADLS)</li>
              <li>Real-time Stream with Event Hub</li>
              <li>CI/CD Deployment & Monitoring</li>
              <li>Project Showcasing</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phase 4: Certification & Career Prep (Week 10–12)</h3>
            <p className="text-sm text-gray-600 mb-4">Total Hours: 24 hrs</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AZ-900 & DP-203 Prep</li>
              <li>Mock Interviews & DSA Practice</li>
              <li>Resume, GitHub & LinkedIn Setup</li>
              <li>Career Coaching & Placement Drive</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">
            💼 Includes access to placement dashboard, job updates, and mentor guidance.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl">
            Download Full Syllabus (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default AzureCourse;
