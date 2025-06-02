import React from "react";
import curve from "../assets/curve.png";

const Test = () => {
  const benefits = [
    {
      title: "Instant Accessibility",
      description: "Stay connected with your customers anytime, anywhere",
    },
    {
      title: "Enhanced Customer Experience",
      description: "Personalized interactions and seamless navigation",
    },
    {
      title: "Brand Visibility & Recognition",
      description: "Strengthen brand identity and customer trust",
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with innovative mobile solutions",
    },
    {
      title: "Higher Engagement & Conversions",
      description: "Convert leads into loyal customers",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 bg-white text-gray-800">
      {/* Header Section */}
      <h2 className="mt-8 md:mt-0 text-3xl md:text-4xl font-semibold text-center">
        Why is{" "}
        <span className="text-pink-600 font-bold">Mobile App Development</span>{" "}
        Important?
      </h2>
      <hr className="border-t-2 border-pink-500 w-14 sm:w-20 my-4 lg:my-8 mx-auto" />

      <p className="mt-0 mx-16 text-center max-w-8xl text-lg text-gray-600">
        With billions of smartphone users worldwide, mobile apps serve as a
        direct bridge between businesses and customers. A well-designed app
        provides
      </p>

      {/* Image & Points Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-8 relative">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={"mobileAppImage"}
            alt="Mobile App Illustration"
            className="w-64 md:w-80"
          />
        </div>

        <div className="flex-1 space-y-6 hidden relative md:block  max-w-md">
            <img src={curve} className=" absolute  scale-[120%] top-[40px]" alt="" />
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4"
            style={{
                marginLeft: index === 0 && "-10px" || index === 1 && "40px" || index === 2 && "60px" || index === 3 && "45px" || index === 4 && "-15px",
            }}>
              <div className="flex items-center justify-center w-8 h-8 p-5 z-10 rounded-full bg-pink-600 text-white font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-pink-600">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="flex-1 space-y-6 md:hidden max-w-md">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-600 text-white font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-pink-600">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
