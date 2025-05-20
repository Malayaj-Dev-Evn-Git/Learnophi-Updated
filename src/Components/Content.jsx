import React from "react";
import Clogo from "../Assets/image/clogo.png";
import Dlogo from "../Assets/image/dlogo.png";
import Ilogo from "../Assets/image/ilogo.png";
import Conlogo from "../Assets/image/conlogo.png";

const Content = () => {
  return (
    
    <section>
      <a
      href="https://wa.me/9572658272" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.66.871 5.108 2.34 7.1L4 29l6.982-2.298A12.942 12.942 0 0016.003 27C22.63 27 28 21.627 28 15.003 28 8.373 22.63 3 16.003 3zm0 21.933a10.877 10.877 0 01-5.56-1.555l-.398-.24-4.145 1.364 1.384-4.036-.26-.416a10.854 10.854 0 01-1.623-5.043c0-6.014 4.89-10.904 10.902-10.904S26.903 8.99 26.903 15.003 22.013 24.933 16.003 24.933zm6.223-8.342c-.34-.17-2.008-.993-2.318-1.106-.31-.114-.536-.17-.763.17s-.875 1.106-1.073 1.334c-.198.227-.39.256-.73.086-.34-.17-1.433-.528-2.73-1.683-1.008-.898-1.688-2.006-1.886-2.347-.198-.34-.022-.523.149-.693.154-.153.34-.397.511-.596.17-.198.227-.34.34-.567.113-.227.057-.43-.029-.596-.086-.17-.763-1.84-1.045-2.53-.27-.647-.54-.56-.763-.57l-.653-.012c-.227 0-.596.086-.91.43s-1.193 1.17-1.193 2.85c0 1.68 1.22 3.304 1.39 3.533.17.227 2.4 3.666 5.82 5.133 3.42 1.466 3.42.977 4.033.914.624-.057 2.008-.823 2.29-1.62.284-.796.284-1.48.198-1.62-.086-.14-.311-.227-.65-.398z" />
      </svg>
    </a>
      <div className="py-8 px-4 mt-20 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="/course-details"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 border-gray-500 rounded-full border hover:bg-gray-200 "
          role="alert"
        >
          <span className="text-xs bg-indigo-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Join our masterclass! See what's new</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-3 text-2xl font-bold tracking-tight leading-none text-gray-700 md:text-5xl lg:text-4xl dark:text-gray-600">
        Your <span className="text-indigo-600">6-Figure</span> Tech Career Begins Here
        </h1>
        <p className="mb-4 text-l font-normal text-gray-500 lg:px-22 sm:px-18 xl:px-48 ">
        We empowers learners to transform into cloud-native professionals through <br></br> expert-led masterclasses and job-focused learning. We don’t just teach<br></br> — we mentor, support, and guide you until you have your dream job.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/course-details"
            className="inline-flex justify-center items-center py-3 px-5 text-base text-indigo-600 font-medium text-center text-grey-400 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Start Learning
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/course-details"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-white focus:ring-2 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
          >
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            View Course
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            {/* Repeat or map logo SVGs here as needed */}
            <a href="https://techmahindra.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <img src={ Clogo } width="90px" alt="company4"></img>
            </a>
            <a href="https://infosys.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <img src={ Ilogo } width="90px" alt="company4"></img>
            </a>
            <a href="https://datamatics.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <img src={ Dlogo } width="90px" alt="company4"></img>
            </a>
            <a href="https://concentrix.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <img src={ Conlogo } width="90px" alt="company4"></img>
            </a>
          </div>
        </div>
      </div>
  
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Left images */}
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="About Us"
            />
          </div>

          {/* Right text and stats */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Who we are
                </h2>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Building Futures. Empowering Students.
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At Learn'ophi, we’re more than just a learning platform — we’re a movement driven by purpose. Every course we design, every class we deliver, and every student we uplift is a testament to our belief that knowledge is the foundation for transformation.
                <br></br>We're here to equip dreamers, doers, and changemakers with the skills they need to thrive in the digital world. Through collaboration, compassion, and commitment, we’re creating a new generation of engineers, architects, and problem-solvers who not only chase success — but define it.
                We don’t just teach — we invest in people. Because when one student succeeds, a community rises with them.
                </p>
              </div>

              {/* Stats */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">500+</h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Interviews Taken</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">200+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Professionals Trained</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">20+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Niche Skill Training Given</h6>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">What's Next?</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* ✅ WHY CHOOSE US SECTION */}
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why Re-skilling is Important
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Degrees Alone Don’t Get You Hired. Skills Do
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We combine industry expertise with a passion for up-skilling the students and working professionals with a commitment to meet their satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Industry Experience</h3>
              <p className="mt-2 text-base text-gray-500">
                We ensure our students get trained from top industry experts, who can not only teach them but show them how the industries work. 
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Go To Market Skills</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team of experts brings relevant experience to guide you on the go-to-market skills which has higher rate of sustainability and growth.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Interview Guidance</h3>
              <p className="mt-2 text-base text-gray-500">
                We go the extra mile to prepare the candidates with our mock interview sessions so that they crack it on the go.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Presentability</h3>
              <p className="mt-2 text-base text-gray-500">
                We don't just stick to tech skill, we make presentation skills are also nutured.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Live Projects</h3>
              <p className="mt-2 text-base text-gray-500">
                We give you the hand-on experience on the skills, with live project modules. Enhancing your practical exposure
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Certification Guidance</h3>
              <p className="mt-2 text-base text-gray-500">
                We provide detailed guidance on how to crack the certification exam, so that your profile stands-out.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        THE RISE OF AZURE DATA ENGINEERS
            </h2>
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
          Built for Impact. Trained for Growth. Trusted by Industry.
          </h2>
          <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
          Azure Data Engineers are among the most in-demand professionals in today’s digital economy—powering data-driven decisions, securing cloud infrastructures, and driving multi-million dollar transformations.
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <a
              href="/course-details"
              className="cursor-pointer bg-indigo-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
            >
              Get started
            </a>
            <a
              href="/course-details"
              className="cursor-pointer bg-indigo-50 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-100"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* Large Card */}
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-gray-800 rounded-2xl flex justify-between flex-wrap">
              <div className="p-5 xl:p-8 w-full md:w-1/2">
                <div className="block">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                Workflows That Mean Business
                </h3>
                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                Learn to build enterprise-ready solutions using Azure tools like Data Factory, Logic Apps, and real-time pipelines. No fluff. Just performance. Master CI/CD pipelines, real-time data flows, and Azure-native automation—no more delays, no more guesswork.
                </p>
                <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <img
                  src="https://pagedone.io/asset/uploads/1695028873.png"
                  alt="Header Section"
                  className="h-full ml-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="relative w-full h-auto">
            <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
              Design the Future with Azure
              </h3>
              <p className="text-xs font-normal text-white mb-8">
              We teach you how to implement modern data ecosystems—Data Lakes, Synapse, DevOps, and governance—exactly how it's done in the enterprise.
              </p>
              <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                View More
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="relative w-full h-auto">
            <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
              Your Path to High-Growth, High-Pay Roles
              </h3>
              <p className="text-xs font-normal text-white mb-8">
              Azure Data Engineering is one of the fastest-growing and highest-paying domains today. We don’t just prep you—we launch you with projects, mentorship, and hiring connections.
              </p>
              <button className="py-2 px-5 border border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                View More
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        
        <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Course Summary
            </h2>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700">
          Don’t Let Your Job Be Taken Away by AI
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
          AI is changing the job market—don’t be left behind. This Azure Data Engineering Masterclass is your gateway 
          to mastering real-time data pipelines, cloud data architecture, and analytics on the Microsoft Azure platform. 
          Learn tools like Azure Data Factory, Synapse, Databricks, and more. Perfect for freshers and professionals, 
          this course helps you switch to tech, upskill smartly, and land your dream role with a rewarding package.
          </p>
          <a
            href="/course-details"
            className="inline-flex items-center text-indigo-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
   
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Connect with us
            </h2>
            <p className="text-xl text-indigo-100">
              Contact us with any query or any idea.
            </p>
          </div>
          <a
            href="/course-details"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
          >
            Get In Touch
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#4F46E5"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default Content;
