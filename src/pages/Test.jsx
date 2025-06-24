import React from "react";

const Test = () => {
  const timelineData = [
    {
      year: "2018",
      title: "The Idea",
      description:
        "Fonsway was conceived in 2018 with a mission to innovate and create impactful tech solutions.",
    },
    {
      year: "2019",
      title: "Launch & Challenges",
      description:
        "Registered in mid-2019, Fonseye faced challenges from the pandemic but pushed forward to make the idea a reality.",
    },
    {
      year: "2020",
      title: "Overcoming Obstacles",
      description:
        "The team adapted to work-from-home conditions,tackling financial struggles and slowly gaining momentum",
    },
    {
      year: "2021",
      title: "First Client",
      description:
        "Fronseye secured its first client and earned DPIIT accreditation as a 'Start-Up'.",
    },

    {
      year: "2022",
      title: "Growth",
      description:
        "The company expanded its team and solidified its place in the ,strengthening its offerings.",
    },
    {
      year: "2023",
      title: "Refining",
      description:
        "Focus shifted to refining products and enhancing customer experience, driving client satisfaction",
    },
    {
      year: "2024",
      title: "Thriving",
      description:
        "Fronseye is now a successful, growing business, focused on innovations and long-term impact",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-2">
          The <span className="font-bold text-pink-500">Big time things</span>{" "}
          Story
        </h2>

        <hr className="border-t-2 border-pink-500 w-14 sm:w-20 my-4 lg:my-6 mx-auto" />

        <p className="text-gray-600 text-lg mb-8">
          A Journey Through the Years
        </p>

        <div className="relative overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div
            className="flex items-center space-x-16 px-0 py-4 relative 
                                            w-[max(100vw,400px)] sm:w-auto sm:px-4"
    
          >
            {/* Dotted line */}
            <div className="absolute top-12  h-0.5 border-t-2 border-dotted border-pink-300 z-0 md:w-[175%] w-[620%]  " />

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center z-10 min-w-[75vw] max-w-[75vw] flex-shrink-0 sm:min-w-0 sm:max-w-xs "
              >
                {/* Year ball */}
                <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex justify-center items-center text-xl font-bold">
                  {item.year}
                </div>
                {/* Card */}
                <div className="bg-pink-50 rounded-lg shadow-md p-4 mt-4 text-left max-w-[90%] border-pink-200 border-2 ">
                  <h3 className="font-bold text-lg mb-2 text-pink-700 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
                /* Hide scrollbar for all screens */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}
      </style>
    </section>
  );
};

export default Test;
