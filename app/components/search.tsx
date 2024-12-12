"use client";

import Image from "next/image";
import SearchSvg from "@/public/resources/Search.svg";
import { useEffect, useRef, useState } from "react";
import { userFetching } from "../api/datafetching";
import ProfileCard from "./profilecard";
import { User } from "../utils/definitions";
import SkeletonProfileCard from "./skeleton_profilecard";

export const SearchIcon = ({ className }: { className: string }) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      className={className}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default function Search({ setUser }: { setUser: (user: User) => void }) {
  const [searchValue, setSearchValue] = useState<string>("");
  const valueRef = useRef<HTMLInputElement>(null);
  const [isFetch, setIsFetch] = useState(!false);

  const [searchUser, setSearchUser] = useState<{
    userinfo: { data: User };
  } | null>();

  const handleEnter = () => {
    if (valueRef.current) {
      setSearchValue(valueRef.current?.value);
      setIsFetch(true);
    }
  };

  useEffect(() => {
    if (searchValue) {
      const fetchData = async () => {
        const data = await userFetching(searchValue);
        setSearchUser(data);
      };
      fetchData();
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchUser) {
      setIsFetch(false);
    }
  }, [searchUser]);

  return (
    <div
      className=" w-[90%] sm:w-[60%] lg:w-[600px] h-[60px]  mt-8  rounded-2xl flex gap-4 justify-center 
    items-center bg-[#20293A]  shadow-lg relative px-4 text-white"
    >
      <Image src={SearchSvg} alt="search icon " className=" stroke-[#4A55ff]" />
      <input
        ref={valueRef}
        onKeyDown={(e) => e.key === "Enter" && handleEnter()}
        className="w-full h-full rounded-xl py-5  
      bg-[#20293A] focus:outline-none placeholder:text-[#4A5567] "
        placeholder="Username"
      />
      <div
        onClick={() => {
          if (searchUser) {
            setUser(searchUser.userinfo.data);
            if (valueRef.current) {
              valueRef.current.value = "";
            }
            setSearchUser(null);
            setIsFetch(false);
          }
        }}
        className=" w-[90%] lg:w-[600px]  h-fit absolute top-20 z-10 flex flex-col gap-2"
      >
        {isFetch ? (
          <SkeletonProfileCard />
        ) : (
          <>{searchUser && <ProfileCard user={searchUser.userinfo.data} />}</>
        )}
      </div>
    </div>
  );
}
