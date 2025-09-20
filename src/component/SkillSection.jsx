import React from "react";
import { LanguageBar } from "../component/LanguageBar";
import { IoIosArrowForward } from "react-icons/io";

export const SkillSection = ({ title, skills }) => {
  return (
    <div className="px-4 md:px-10">
      <div className="flex items-center">
        <IoIosArrowForward className="mt-2" />
        <h2 className="mb-2 text-lg italic font-medium text-gray-400 mt-4">
          {title}
        </h2>
      </div>
      {skills.map((skill) => (
        <LanguageBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};
