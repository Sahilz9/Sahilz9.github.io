const Education = () => {
  const techStacksGU = [
    "DBMS",
    "Computer Networking",
    "DAA",
    "OS",
    "Linux",
    "JavaScript",
    "Tailwind CSS",
  ];

  const vidyaKnowledge = [
    "Cinematography",
    "Adobe XD",
    "Adobe AI",
    "Photoshop",
    "Blender",
    "Adobe Premiere Pro",
  ];

  const school = ["Skating", "Football", "Music Club"];

  return (
    <section
      className="flex justify-center flex-col items-center mt-[10em] gap-y-20 relative"
      id="education-section"
    >
      <div className="flex justify-center gap-x-10 flex-row sm:flex-col">
        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Education
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl text-center hover:text-slate-400 duration-300">
            My education has been a journey of self-discovery and growth.
            <br />
            My educational details are as follows.
          </p>
        </div>
      </div>

      {/* Education Details */}
      {/* Galgotias University */}
      <div
        className="flex justify-center items-center w-full"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Sept 2022 - May 2024
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://upload.wikimedia.org/wikipedia/en/6/64/Galgotias_University_logo_seal.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Galgotias University
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Master of Computer Application
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I have completed my Master&apos;s of Computer Application at
                    Galgotias University, Uttar Pradesh. The courses taught
                    during the program included Data Structures, Algorithms,
                    Object-Oriented Programming, Database Management Systems,
                    Operating Systems, and Computer Networks, among others. I
                    was also a member of the TechnoJam coding club, where I
                    learned and worked on exciting projects with a team of
                    talented developers.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {techStacksGU.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1  inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VKP */}
      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Aug 2019 - Apr 2022
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://pbs.twimg.com/profile_images/709273084553859073/fMPbBjYK_400x400.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Vidya Knowledge Park
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Bachelor of Journalism and Mass Communication
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I have completed my Bachelor of Journalism and Mass
                    Communication (BJMC) at Vidya Knowledge Park in Uttar
                    Pradesh. The program included courses in
                    Animation,Cinematography, Economics, Science, and other
                    subjects.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {vidyaKnowledge.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              2013 - 2019
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bS629iVJtc5Ea4gf2aVAMgb1NVD6y1kWLw&s"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Dayawati Modi Academy
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                6th grade - HSC
              </h3>
              <ul className="list-disc text-base mt-2 w-full sm:text-base	text-gray-400">
                <li className="hover:text-gray-300 duration-300">
                  I gained a strong educational foundation and learned a lot of
                  valuable lessons. Additionally, I actively participated in
                  various extracurricular activities, which helped in my overall
                  development.
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {school.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute mt-[-50px] inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mt-10 sm:mt-20 mb-[-5em]">
        <p className="text-slate-500">Made with 🐞</p>
      </div>
    </section>
  );
};

export default Education;
