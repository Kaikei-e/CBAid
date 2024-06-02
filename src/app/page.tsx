import { VulnerableChild } from "@/app/SchemaModes/VulnerableChild";
import { HealthyAdult } from "@/app/SchemaModes/HealthyAdult";
import { CriticalParent } from "@/app/SchemaModes/CriticalParent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1>CBAid</h1>
        <h1>Schema Modes</h1>
        <div className="flex flex-row w-10/12 justify-between">
          <HealthyAdult />
          <VulnerableChild />
          <CriticalParent />
        </div>
      </div>
    </main>
  );
}
