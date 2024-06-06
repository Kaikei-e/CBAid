import { SchemaModeTemplate } from "./SchemaModeTemplate";
import { emotionalStatement } from "@/app/types/emotionalStatement";
import React from "react";

interface VulnerableChildProps {
  thoughts: emotionalStatement[];
}

export const VulnerableChild: React.FC<VulnerableChildProps> = ({
  thoughts,
}) => {
  return (
    <SchemaModeTemplate
      title="Vulnerable Child"
      description="This Vulnerable Child mode represents your raw emotions. It includes feelings such as fear, anxiety, and sadness."
      bgColor="bg-blue-300"
      thoughts={thoughts}
    />
  );
};
