import React from "react";
import { emotionalStatement } from "@/app/types/emotionalStatement";

interface SchemaModeProps {
  title: string;
  description: string;
  bgColor: string;
  thoughts?: emotionalStatement[];
}

export const SchemaModeTemplate: React.FC<SchemaModeProps> = ({
  title,
  description,
  bgColor,
  thoughts = [],
}) => {
  const test: emotionalStatement = {
    date: new Date(),
    content: "I am happy.",
  };

  return (
    <div
      className={`each-mode flex flex-col w-full h-full p-4 rounded-md text-center ${bgColor}`}
    >
      <div className="">
        <div className="relative group flex items-center justify-center space-x-2">
          <h1 className="text-xl">{title}</h1>
          <span className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
          <div className="absolute left-0 top-full mt-2 w-full bg-white text-black text-sm p-2 rounded-md shadow-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            {description}
          </div>
        </div>
      </div>
      <div className="text-slate w-full flex-grow">
        <div className="bg-blue-100 rounded-md h-full">
          <div className="flex flex-col bg-blue-100 rounded-md m-2 h-full">
            {Array.isArray(thoughts) &&
              thoughts.map((thought, index) => (
                <div
                  key={thought.date.toString() + index}
                  className="flex items-center space-x-2 p-2"
                >
                  <span className="text-md">{thought.content}</span>
                </div>
              ))}
            <div className="flex items-center space-x-2 p-2">
              <span className="text-md">{test.content}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
