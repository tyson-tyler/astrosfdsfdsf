import React from "react";
import PortfolioSection from "./fing";
import Image from "next/image";
import Open from "./open";

const About = () => {
  return (
    <>
      <h1 className="w-full p-3 mt-4 text-center head_text dark:text-white text-black mb-10">
        ABOUT THE CREATOR
      </h1>
      <div>
        <PortfolioSection
          image="/fuck.jpeg"
          title=" Tarot Expert"
          description="Raman Arora, the founder of Kamakshi Tarot Academy, is an experienced astrologer and compassionate person dedicated to offering personalised guidance to all those who need it. Her expertise also lies in teaching tarot as a powerful projective psychological tool that helps individuals confront their past, deal with any existing baggage, and find solutions for its impact on their present lives. Her years of experience in tarot reading and teaching, have made her more perceptive to her students’ motivations, beliefs, and inner conflicts. 
Raman Arora helps her students understand the transformative potential of tarot. Her teaching method is insightful and compassionate, providing a nurturing environment for learning and growth. Just as one consults a doctor for health issues or a lawyer for legal matters, 
Raman Arora believes Tarot is essential for finding peace and fulfilment in life, both personally and professionally. Through this course, she aims to empower individuals to make informed decisions and lead lives of purpose and fulfilment. "
          demo="Raman Arora"
          exp="/hello.jpg"
        />
        {/* <Open /> */}
        {/* <Open /> */}
      </div>
    </>
  );
};

export default About;
