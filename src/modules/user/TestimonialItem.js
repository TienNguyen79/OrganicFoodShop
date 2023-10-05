import React from "react";
import UserComment from "./parts/UserComment";
import UserAvatar from "./parts/UserAvatar";
import UserName from "./parts/UserName";
import UserRole from "./parts/UserRole";
import ProStart from "../product/parts/ProStart";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";

const TestimonialItem = () => {
  return (
    <div className="relative p-6 bg-white mb-10">
      <img src="/phayphay.png" className="absolute" alt="" />
      <div className="mt-10">
        <UserComment>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
          sodales. Donec sed neque eget Robert Fox Customer
        </UserComment>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-1">
            <UserAvatar></UserAvatar>
            <div>
              <UserName></UserName>
              <UserRole></UserRole>
            </div>
          </div>
          <div className="flex items-center gap-x-[2px]">
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarGray></IconStarGray>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
