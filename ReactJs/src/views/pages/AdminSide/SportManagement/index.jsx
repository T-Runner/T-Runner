import React, { useEffect, useState } from "react";
import PageLayout from "../../../components/PageLayout";
import CreateEditSport from "./create-edit-sport";
import ListSport from "./list-sport";
import { defautSport } from "../../../../constants";

const SportManagement = () => {
  const [isCreate, setIsCreated] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [sport, setSport] = useState(defautSport);
  const handleCloseCreate = () => {
    setIsCreated(false);
  };

  const handleCreate = () => {
    setIsCreated(true);
  };

  const handleOpenEdit = (item) => {
    setIsOpenEdit(true);
    setSport({
      sportName: item.sportName,
      sportType: item.sportType,
      active: item.active,
    });
  };

  const handleCloseEdit = () => {
    setIsOpenEdit(false);
  };

  return (
    <div>
      <PageLayout>
        {isCreate ? (
          <CreateEditSport
            onClose={handleCloseCreate}
            action="create a new sport"
            sport={defautSport}
          />
        ) : isOpenEdit ? (
          <CreateEditSport
            onClose={handleCloseEdit}
            action="edit sport"
            sport={sport}
          />
        ) : (
          <div>
            <div className="flex justify-between">
              <p className="uppercase font-barlow font-bold text-28">SPORTS</p>
              <button
                className="uppercase w-189 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded"
                onClick={handleCreate}
              >
                CREATE A NEW SPORT
              </button>
            </div>
            <ListSport
              actionOpen={handleOpenEdit}
              actionClose={handleCloseEdit}
            />
          </div>
        )}
      </PageLayout>
    </div>
  );
};

export default SportManagement;
