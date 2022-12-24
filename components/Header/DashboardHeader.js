import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const DashboardHeader = () => {
  const [mode, setMode] = useState(false);

  return (
    <div className="flex items-center justify-between border-b px-3 py-1">
      <div className="flex  text-xl">
        <button className="flex items-center">
          <span className="cursor-pointer rounded-full p-3 hover:bg-slate-100">
            {mode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </span>
        </button>
        <span className="cursor-pointer rounded-full p-3 hover:bg-slate-100">
          <GrNotification />
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="avatar flex flex-col items-end">
          <p className="font-bold">Md. Imran_nazir</p>
          <small>Admin</small>
        </div>
        <span className=" p-2 text-4xl">
          <RxAvatar className="rounded-full bg-slate-100" />
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
