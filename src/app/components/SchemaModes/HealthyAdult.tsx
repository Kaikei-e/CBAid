import { SchemaModeTemplate } from "./SchemaModeTemplate";
import { emotionalStatement } from "@/app/types/emotionalStatement";
import React from "react";

interface HealthyAdultProps {
  thoughts: emotionalStatement[];
}

export const HealthyAdult: React.FC<HealthyAdultProps> = ({ thoughts }) => {
  return (
    <SchemaModeTemplate
      title="Healthy Adult"
      description="This mode is your absolute ally that defends and protects you."
      bgColor="bg-green-300"
      thoughts={thoughts}
    />
  );
};
