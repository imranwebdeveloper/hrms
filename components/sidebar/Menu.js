import Link from "next/link";
import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import {
  BsPuzzle,
  BsCalendarEvent,
  BsPersonCircle,
  BsCardChecklist,
  BsCheck2All,
} from "react-icons/bs";

import MenuLink from "../shared/MenuLink";

const Menu = () => {
  return (
    <ul className="menu w-72  bg-base-100  text-base-content">
      <MenuLink
        content="All Employee"
        icon={<FiUsers />}
        path="/dashboard/all-employee"
      />
      <MenuLink
        content="Add Employee"
        icon={<AiOutlineUserAdd />}
        path="/dashboard/add-employee"
      />
      <MenuLink
        content="My Profile"
        icon={<BsPersonCircle />}
        path="/dashboard/my-profile"
      />
      <MenuLink
        content="Attendance"
        icon={<BsPuzzle />}
        path="/dashboard/attendance"
      />
      <MenuLink
        content="Leave Info"
        icon={<BsCardChecklist />}
        path="/dashboard/leave-info"
      />
      <MenuLink
        content="Leave Application"
        icon={<BsCalendarEvent />}
        path="/dashboard/leave-application"
      />
      <MenuLink
        content="Approve Application"
        icon={<BsCheck2All />}
        path="/dashboard/approve-application"
      />
      <MenuLink
        content="Change Password"
        icon={<GrPowerReset />}
        path="/dashboard/change-password"
      />
    </ul>
  );
};

export default Menu;
