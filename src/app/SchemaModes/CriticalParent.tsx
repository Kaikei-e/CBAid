import { SchemaModeTemplate } from "./SchemaModeTemplate";
import { emotionalStatement } from "@/app/types/emotionalStatement";
import React from "react";

interface CriticalParentProps {
  thoughts: emotionalStatement[];
}

export const CriticalParent: React.FC<CriticalParentProps> = ({ thoughts }) => {
  return (
    <SchemaModeTemplate
      title="Critical Parent"
      description="This mode is overly critical and demanding, often leading to feelings of inadequacy."
      bgColor="bg-red-300"
      thoughts={thoughts}
    />
  );
};
