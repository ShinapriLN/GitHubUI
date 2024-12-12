import Image from "next/image";
import LicenseSvg from "@/public/resources/Chield_alt.svg";
import NestingSvg from "@/public/resources/Nesting.svg";
import StarSvg from "@/public/resources/Star.svg";
import { Repo } from "../utils/definitions";
import { passingTimeAgo } from "../utils/time";

export default function Card({
  repo,
  name,
  description,
  license,
  forks,
  stargazers_count,
  day_ago,
}: {
  repo?: Repo;
  name?: string;
  description?: string;
  license?: string;
  forks?: number;
  stargazers_count?: number;
  day_ago?: number;
}) {
  return (
    <div
      className="bg-gradient-to-r from-[#111729] to-[#1D1B48] p-6 
    rounded-xl flex flex-col gap-4 h-fit"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-[#CDD5E0] text-[1.25rem]">
          {repo ? repo.name : name}
        </h1>
        <p className="text-[#CDD5E0] text-[1rem]">
          {repo ? repo.description : description}
        </p>
      </div>

      <div className="flex gap-8 text-[#CDD5E0] text-[1rem]">
        <div className="flex gap-2">
          {((repo && repo.license) || license) && (
            <div className="flex items-center gap-1">
              <Image src={LicenseSvg} alt="Nesting" />
              {repo ? repo.license.key.toUpperCase() : license}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Image src={NestingSvg} alt="Nesting" /> {repo ? repo.forks : forks}
          </div>

          <div className="flex items-center gap-1">
            <Image src={StarSvg} alt="Star" />{" "}
            {repo ? repo.stargazers_count : stargazers_count}
          </div>
        </div>
        <p className="text-[0.75rem] self-center">
          updated {repo ? passingTimeAgo(repo.updated_at) : day_ago} days ago
        </p>
      </div>
    </div>
  );
}
