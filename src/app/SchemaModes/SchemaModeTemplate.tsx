import React from "react";

interface SchemaModeProps {
  title: string;
  description: string;
  bgColor: string;
}

export const SchemaModeTemplate: React.FC<SchemaModeProps> = ({
  title,
  description,
  bgColor,
}) => {
  return (
    <div className={`w-1/4 p-4 flex-col rounded-md text-center ${bgColor}`}>
      <div className="relative group">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-xl">{title}</h1>
          <span className="text-lg cursor-pointer">
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
        </div>
        <div className="absolute left-0 top-full mt-2 w-full bg-white text-black text-sm p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>
      </div>
      <div className="text-slate w-full h-full">
        <div className="bg-blue-100 rounded-md">
          <p>sample text below</p>
          <p>I'm so proud of this achievement!
          </p>
          <p>
            It was a long journey, but I finally made it! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};
