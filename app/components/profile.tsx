import Image from "next/image";
import { User } from "../utils/definitions";

export default function Profile({ user }: { user?: User }) {
  return (
    <div className="flex relative">
      {/* <Image src={chirld} alt="some"  /> */}
      <div className="w-36 h-36 bg-[#20293A] p-2 rounded-2xl absolute -top-12">
        {/* <div className="bg-white h-full w-full rounded-xl"></div> */}
        <Image
          src={
            (user && user.avatar_url) ||
            "https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          }
          width={300}
          height={300}
          className="object-cover h-full w-full rounded-xl"
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-wrap gap-6 w-96 2xl:w-full ml-48 my-5">
        <div className="bg-[#111729] rounded-xl p-4 px-6 text-white flex gap-3">
          <span className="text-[#4A5567]">Follower |</span>
          {user ? user.followers || "0" : "2789"}
        </div>
        <div className="bg-[#111729] rounded-xl p-4 px-6 text-white flex gap-3">
          <span className="text-[#4A5567]">Following |</span>
          {user ? user.following || "0" : " 0"}
        </div>
        <div className="bg-[#111729] rounded-xl p-4 px-6 text-white flex gap-3">
          <span className="text-[#4A5567]">Location |</span>
          {user ? user.location || "This world" : "San Francisco, CA"}
        </div>
      </div>
    </div>
  );
}
