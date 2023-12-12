"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Classes",
    id: "classes",
    content: (
      <ul className="list-disc pl-2">
        <li>5th (All Subject)</li>
        <li>6th (All Subject)</li>
        <li>7th (All Subject)</li>
        <li>8th (All Subject)</li>
        <li>9th (Math,Science,English)</li>
        <li>10th (Math,Science,English)</li>


        
      </ul>
    ),
  },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Fullstack Academy of Code</li>
//         <li>University of California, Santa Cruz</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
];

const CourseSection = () => {
  const [tab, setTab] = useState("classes");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">COURSES</h2>
          <p className="text-base lg:text-lg">
          {/* Hello! I&apos;m Divya, an educator and owner of <b style={{color:"green"}}>TheFutureClasses</b> with a passion for [Your Subject]. My [X years] of teaching have been driven by a simple philosophy: engage, inspire, and empower. I hold a [degree] from [University] and specialize in [area of expertise]. In my classroom at <b style={{color:"green"}}>TheFutureClasses</b>, every lesson is an opportunity for students to build confidence and skills for the future. Off duty, I&apos;m [hobby or personal interest], which keeps me energized and creative. Looking forward to learning and growing together! */}

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("classes")}
              active={tab === "classes"}
            >
              {" "}
              Classes{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
