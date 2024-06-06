"use client";
import { useState } from "react";
import { VulnerableChild } from "@/app/SchemaModes/VulnerableChild";
import { HealthyAdult } from "@/app/SchemaModes/HealthyAdult";
import { CriticalParent } from "@/app/SchemaModes/CriticalParent";
import { emotionalStatement } from "@/app/types/emotionalStatement";

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
      <div className="z-10 w-full h-5/6 flex-col items-center justify-center font-mono text-sm ">
        <p className="m-2 text-3xl text-center">CBAid</p>
        <h1 className="m-2 text-xl text-center">Schema Modes</h1>
        <div className="schema-modes flex mt-4 flex-row w-full h-5/6 justify-between">
          <HealthyAdult thoughts={healthyAdultThoughts} />
          <VulnerableChild thoughts={vulnerableChildThoughts} />
          <CriticalParent thoughts={criticalParentThoughts} />
        </div>
      </div>
    </main>
  );
}
