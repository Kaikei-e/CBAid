import { VulnerableChild } from "@/app/SchemaModes/VulnerableChild";
import { HealthyAdult } from "@/app/SchemaModes/HealthyAdult";
import { CriticalParent } from "@/app/SchemaModes/CriticalParent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 w-full flex-col items-center justify-center font-mono text-sm lg:flex">
        <p className="m-2 text-3xl">CBAid</p>
        <h1 className="m-2 text-xl">Schema Modes</h1>
        <div className="flex mt-4 flex-row w-full justify-between">
          <HealthyAdult />
          <VulnerableChild />
          <CriticalParent />
        </div>
      </div>
    </main>
  );
}
