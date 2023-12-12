"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const studentData = [
  {
    id: 1,
    // title: "React Portfolio Website",
    // description: "Project 1 description",
    image: "https://res.cloudinary.com/dovcumkby/image/upload/v1702318662/WhatsApp_Image_2023-12-11_at_11.44.53_PM_twb8vt.jpg",
    contentType: "image", // Add this line

    tag: ["Images"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    // title: "Potography Portfolio Website",
    // description: "Project 2 description",
    image: "https://res.cloudinary.com/dovcumkby/video/upload/v1702360440/WhatsApp_Video_2023-12-11_at_11.48.58_PM_dc0o4v.mp4",
    contentType: "video", // Add this line

    tag: ["Videos"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 3,
  //   // title: "E-commerce Application",
  //   // description: "Project 3 description",
  //   image: "https://res.cloudinary.com/dovcumkby/image/upload/v1702360434/WhatsApp_Image_2023-12-11_at_11.51.37_PM_zisedg.jpg",
  //   tag: ["Images"],
  //   contentType: "image", // Add this line

  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   contentType: "image", // Add this line
  //   image: "https://res.cloudinary.com/dovcumkby/video/upload/v1702360438/WhatsApp_Video_2023-12-11_at_11.51.50_PM_owusul.mp4",
  //   tag: ["Images"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   contentType: "image", // Add this line
  //   tag: ["Images"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   contentType: "image", // Add this line
  //   tag: ["Images"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Images");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = studentData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section style={{marginLeft:"40px", marginRight:"40px"}}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        <b style={{color:"white"}}>TheFutureClasses Images</b>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Images"
          isSelected={tag === "Images"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Videos"
          isSelected={tag === "Videos"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              contentType={project.contentType}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
