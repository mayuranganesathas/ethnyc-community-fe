import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navfoot/Navbar";
import Box from "../components/ui/Box";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";

export default function CommunityPage() {
  return (
    <div>
      {" "}
      <NavBar />
      <div>
        <div className="flex justify-between">
          <div className="text-2xl px-12 py-4">Metrics</div>
          <div className="flex px-8 py-12">
            <div className="px-4">
              {" "}
              <ChevronDownIcon className="h-4 w-4" /> Last 7 Days{" "}
            </div>
            <div>
              <ChevronDownIcon className="h-4 w-4" />
              All Pools
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <Box headingText="12K" subText="Impressions" />
          <Box headingText="12K" subText="Impressions" />
          <Box headingText="12K" subText="Impressions" />
          <Box headingText="12K" subText="Impressions" />
        </div>
      </div>
      <div>
        <div className="flex justify-between py-4">
          {" "}
          <div className="text-2xl px-12 py-4">Pools</div>
          <button className="bg-primary text-white rounded-xl  h-8 mt-6 mr-20 text-md">
            + New Pool
          </button>
        </div>
        <div>Table</div>
      </div>
      <div className="flex justify-between py-4">
        {" "}
        <div className="text-2xl px-12 py-4">Community</div>
        <div className="text-primary  h-8 mt-10 mr-20 text-md">
          <PlusCircleIcon className="h-4 w-4 text-primary text-sm" /> Add To
          Blacklist
        </div>
      </div>{" "}
      <div>Table</div>
    </div>
  );
}
