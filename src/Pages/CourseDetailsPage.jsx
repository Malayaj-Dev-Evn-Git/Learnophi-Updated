import React, { useState } from "react";
import { ChevronDown, ChevronRight, Lock } from "lucide-react";
import courseImage from "../Assets/image/courseImage.png";
import Teacher from "../Assets/teacher.jpg";

const tabs = ["Overview", "Curriculum", "Instructor"];

const curriculumData = [
  {
    title: "Phase 1: Foundations of Data & Cloud (Weeks 1–3)",
    duration: "3 Lectures, 34:51 min",
    content: {
      level: "Beginner Level",
      description:
        "Build strong base in data concepts, Azure basics & data engineering workflows.",
      resources: "6 Videos, 1 Notebook",
      lectures: [
        { type: "video", title: "Introduction to Data Engineering", preview: true },
        { type: "video", title: "Basics of Databases & Data Warehousing" },
        { type: "video", title: "Introduction to Cloud Computing & Azure Ecosystem" },
        { type: "video", title: "Azure Storage Services: Blob, ADLS, Tables, Queues" },
        { type: "video", title: "Data Movement Services: Azure Data Factory Basics" },
        { type: "video", title: "Lab: Setting up Azure Free Tier, Blob Uploads" },
      ],
    },
  },
  {
    title: "Phase 2: Core Azure Data Engineering (Weeks 4–9)",
    duration: "3 Lectures, 34:51 min",
    content: {
        level: "Beginner Level",
        description:
          "Learn and apply tools used by real-world Azure Data Engineers",
        resources: "7 Videos, 1 Notebook",
        lectures: [
          { type: "video", title: "Azure Data Factory – Pipelines, Triggers, Linked Services" },
          { type: "video", title: "ETL Concepts and Data Flows in ADF" },
          { type: "video", title: "Azure SQL, Synapse Analytics – Architecture, Data Ingestion" },
          { type: "video", title: "Azure Data Lake Gen2 and Partitioning Strategy" },
          { type: "video", title: "Delta Lake and Apache Spark with Azure Databricks" },
          { type: "video", title: "Azure DevOps – CI/CD Pipelines for Data Projects" },
          { type: "video", title: "Lab: Building ETL Pipeline in ADF with Data Lake Sink" },
        ],
      },
  },
  {
    title: "Phase 3: Advanced Tools & Real-World Scenarios (Weeks 10–12)",
    duration: "15 Lectures, 34:51 min",
    content: {
        level: "Beginner Level",
        description:
          "Connect concepts and tools to solve enterprise data challenges",
        resources: "4 Videos, 1 Audio, 1 Notebook",
        lectures: [
          { type: "video", title: "Project 1: Batch Data Ingestion with Azure Data Factory"},
          { type: "video", title: "Project 2: Real-Time Streaming with Event Hub & Databricks"},
          { type: "video", title: "CI/CD Deployment for Data Pipelines with Azure DevOps" },
          { type: "video", title: "Hands-on Lab: Azure Monitor and Log Analytics for Pipelines" },
        ],
      },
  },
  {
    title: "Phase 4: Career Enablement & Certification (Weeks 13–16)",
    duration: "3 Lectures, 34:51 min",
    content: {
        level: "Beginner Level",
        description:
          "Apply all skills to build, present, and interview for real jobs",
        resources: "2 Videos, 1 Audio, 1 Notebook",
        lectures: [
          { type: "video", title: "AZ-900 & DP-203 Certification Overview"},
          { type: "video", title: "Resume Building & LinkedIn Optimization"},
          { type: "video", title: "System Design for Data Engineering" },
          { type: "video", title: "DSA for Data Engineers (SQL + Python)" },
          { type: "video", title: "Resume Projects & GitHub Walkthrough" },
          { type: "video", title: "Career Counseling & Salary Negotiation" },
        ],
      },
  },
];

const CourseDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openIndex, setOpenIndex] = useState(0); // Open first section by default

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-6 py-20 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Hero Image */}
        <img
          src={courseImage} // Replace with your actual image
          alt="Course Preview"
          className="rounded-2xl w-full object-cover"
        />

        {/* Category */}
        <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
          Data Engineering
        </span>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          Azure Data Engineer Mastery Program (Beginner to Pro)
        </h1>

        {/* Course Description */}
        <section>
          <div className="mt-10">
            {/* Tabs */}
            <div className="flex space-x-6 border-b pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-sm font-medium pb-2 ${
                    activeTab === tab
                      ? "text-white bg-indigo-600 px-4 py-1 rounded"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "Overview" && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Course Description</h2>
                <p className="text-gray-700 mb-2">
                Break into one of the most in-demand careers in tech with the Azure Data Engineering 
                Masterclass — your gateway to high-paying, future-ready roles in cloud data.Whether you're a fresher, 
                a non-tech professional, or an IT professional stuck in support or testing, this course is designed to 
                help you pivot into cloud data roles with confidence — and land your dream package.<br></br>Master Azure Data Factory, 
                SQL, Python, Data Lakes, ETL pipelines, and more with hands-on projects and mentorship. 
                The program is led by Him, a Senior Architect at Confidential with 17+ years of experience in Wipro, 
                Infosys, and Tech Mahindra. His guidance will help you build not just skills — but career confidence.
                </p>
                <h3 className="mt-4 font-semibold">💼 What Makes This Course Powerful?</h3>
                <ul>
                <li><p className="text-gray-700">Get job-ready in weeks with real-world projects and live mentorship.</p></li>
                <li><p className="text-gray-700">Learn tools used by top data teams across the world.</p></li>
                <li><p className="text-gray-700">Switch from non-tech or low-paying roles to cloud careers offering 10x salary hikes.</p></li>
                <li><p className="text-gray-700">Craft a profile that recruiters and hiring managers are actively searching for</p></li></ul>
                <h3 className="mt-4 font-semibold">👥 Who Can Join?</h3><ul>
                <li><p className="text-gray-700">Freshers who want to start a solid career in tech.</p></li>
                <li><p className="text-gray-700">Non-tech professionals from BPO, sales, teaching, banking, etc..</p></li>
                <li><p className="text-gray-700">IT professionals stuck in testing/support roles seeking better growth.</p></li></ul>
                <p className="text-gray-700 mb-2">This isn’t just a course — it's your career transformation path backed by expert mentorship, practical learning, and strong industry alignment.</p>
              </div>
            )}

            {activeTab === "Curriculum" && (
              <div className="mt -6 space-y-4">
              <div className="text-sm text-gray-600 mb-2">
                Level <strong>Beginner</strong> &nbsp;&nbsp;|&nbsp;&nbsp; 12 Lectures &nbsp;&nbsp;|&nbsp;&nbsp; Total: 5 Hours 56 Minutes 24 Seconds
              </div>

              {curriculumData.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg border"
                >
                  {/* Header */}
                  <div
                    className={`flex justify-between items-center px-4 py-3 cursor-pointer ${
                      openIndex === index ? "bg-indigo-600 text-white" : ""
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-semibold">{section.title}</span>
                    <span className="text-sm">{section.duration}</span>
                    {openIndex === index ? <ChevronDown /> : <ChevronRight />}
                  </div>

                  {/* Body */}
                  {openIndex === index && section.content && (
                    <div className="px-6 pb-4 pt-2 text-sm text-gray-700 space-y-3">
                      <p className="font-medium text-gray-800">{section.content.level}</p>
                      <p>{section.content.description}</p>
                      <p className="text-gray-500">{section.content.resources}</p>

                      <div className="space-y-2">
                        {section.content.lectures.map((lec, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded"
                          >
                            <div className="flex items-center space-x-2">
                              <span>
                                {lec.type === "video" && "🎬"}
                                {lec.type === "audio" && "🎧"}
                                {lec.type === "notebook" && "📓"}
                              </span>
                              <span>
                                {lec.type.charAt(0).toUpperCase() + lec.type.slice(1)}: {lec.title}
                              </span>
                            </div>

                            <div className="flex space-x-2 items-center">
                              {lec.preview && (
                                <span className="bg-rose-100 text-indigo-600 px-2 py-0.5 text-xs rounded">
                                  Preview
                                </span>
                              )}
                              <Lock size={16} className="text-gray-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}

            {activeTab === "Instructor" && (
              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={Teacher} // Replace with the actual image path
                    alt="Daniel Smith"
                    className="w-48 h-48 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                   
                    <p className="text-pink-500 font-medium mb-4">Enterprise Data Architect & Career Transformation Mentor</p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>🎓 </span>
                        <span>Certified TOGAF Architect</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>☁️ </span>
                        <span>AWS Certified Solutions Architect</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>📝</span>
                        <span>240+ Trainigs</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>⭐ Global Exposure</span>
                        <span></span>
                      </div>
                    </div>

                    {/* <div className="flex gap-4 text-xl text-blue-600">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-youtube text-red-500"></i></a>
                      <a href="#"><i className="fab fa -twitter text-sky-500"></i></a>
                    </div> */}
                  </div>
                </div>

                <p className="text-gray-600 mt-6 text-sm leading-relaxed">
                With a strong technical foundation and proven leadership across geographies, 
                He is passionate about leveraging cloud and data technologies to solve complex business challenges.
                With 17+ years of real-world IT experience, He isn’t just another trainer—he’s a seasoned expert who 
                has lived and breathed enterprise data engineering across the globe! Having worked with industry giants 
                like Infosys, Wipro, Tech Mahindra, and currently a Senior Manager at Cognizant, 
                He brings a powerhouse of knowledge, insights, and industry secrets straight to your screen.<br></br>
                He doesn’t just teach—he transforms mindsets. His classes blend deep technical knowledge with 
                real-world use cases, live project exposure, and industry best practices that can launch or accelerate 
                your career in Azure Data Engineering.<br></br>If you're a fresher, career switcher, or working professional 
                looking to break into one of the most in-demand tech careers—He is the mentor you’ve been waiting for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">What You Will Learn?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
           
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Build real-time ETL pipelines using Azure Data Factory, Data Lake, and Databricks</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Master cloud data architecture and confidently navigate the Azure ecosystem</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Gain hands-on expertise in SQL, PySpark, and big data processing techniques</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Learn to implement CI/CD pipelines with Azure DevOps for production-grade solutions</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Work on real-world projects to create a solid GitHub portfolio employers notice</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-600 mt-1" />
                <span>Prepare for the DP-203 Azure Data Engineer Associate certification with confidence</span>
              </div>
        
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">No Coding or Cloud Background Required</div>
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">Basic Computer Literacy</div>
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">Curiosity to Learn New Tech</div>
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">Laptop with Internet Access</div>
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">No Prior IT or Cloud Certifications Needed</div>
            <div className="bg-white text-gray-500 shadow-md rounded-lg p-4 text-center">Commitment to 8 Hours/Week</div>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <img
            src={ courseImage } // Replace with your thumbnail
            alt="Video Preview"
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Free</h2>
          <a
            href="https://forms.gle/4ewDGj843KqF6DMA8"
            target="_blank"
            rel="noopener noreferrer"
            >
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">
                Enroll Now
              </button>
            </a>
          <ul className="text-gray-700 text-sm mt-4 space-y-2">
            <li><strong>Lectures:</strong> 80</li>
            <li><strong>Duration:</strong> 95Hr 30Minutes</li>
            <li><strong>Level:</strong> Bignner - Intermediate</li>
            <li><strong>Language:</strong>English/Hindi</li>
          </ul>

         
        </div>
      </aside>
    </div>
  );
};

export default CourseDetailsPage;