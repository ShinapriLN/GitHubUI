import Image from "next/image";
import { User } from "../utils/definitions";
export default function ProfileCard({ user }: { user: User }) {
  return (
    <div className="flex bg-[#111729] rounded-xl p-2 gap-4 items-center">
      <Image
        src={user.avatar_url}
        width={300}
        height={300}
        alt="profile image"
        className="w-16 h-16 rounded-xl object-cover"
      />

      <div className="flex flex-col gap-1">
        <h1 className="text-[1rem]">{user.login}</h1>

        <p className="text-[0.75rem] text-[#4A5567]">{user.bio}</p>
      </div>
    </div>
  );
}
