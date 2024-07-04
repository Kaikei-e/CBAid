"use client";
import { useEffect, useState } from "react";
import { VulnerableChild } from "@/app/components/SchemaModes/VulnerableChild";
import { HealthyAdult } from "@/app/components/SchemaModes/HealthyAdult";
import { CriticalParent } from "@/app/components/SchemaModes/CriticalParent";
import { emotionalStatement } from "@/app/types/emotionalStatement";
import { InputForm } from "@/app/components/forms/inputForm";

export default function Home() {
  const [healthyAdultThoughts, setHealthyAdultThoughts] = useState<
    emotionalStatement[]
  >([]);
  const [vulnerableChildThoughts, setVulnerableChildThoughts] = useState<
    emotionalStatement[]
  >([]);
  const [criticalParentThoughts, setCriticalParentThoughts] = useState<
    emotionalStatement[]
  >([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 w-full flex-col items-center justify-center font-mono text-sm flex-grow">
        <p className="m-2 text-3xl text-center">CBAid</p>
        <h1 className="m-2 text-xl text-center">Schema Modes</h1>
        <div className="schema-modes flex mt-4 flex-row w-full h-full justify-between">
          <div className="w-1/3 h-full p-2">
            <HealthyAdult thoughts={healthyAdultThoughts} />
          </div>
          <div className="w-1/3 h-full p-2">
            <VulnerableChild thoughts={vulnerableChildThoughts} />
          </div>
          <div className="w-1/3 h-full p-2">
            <CriticalParent thoughts={criticalParentThoughts} />
          </div>
        </div>
        <div className="m-4">
          <InputForm />
        </div>
      </div>
    </main>
  );
}
