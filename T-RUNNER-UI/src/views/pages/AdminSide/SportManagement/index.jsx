import React from "react";
import PageLayout from "../../../components/PageLayout";
import ListSport from "./list-sport.jsx";

const SportManagement = () => {
  return (
    <div>
      <PageLayout>
        <div>
          <div className="flex justify-between">
            <p className="uppercase font-barlow font-bold text-28">Sports</p>
            <button className="uppercase w-189 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded">
              Create a New Sport
            </button>
          </div>
          <ListSport />
        </div>
      </PageLayout>
    </div>
  );
};

export default SportManagement;