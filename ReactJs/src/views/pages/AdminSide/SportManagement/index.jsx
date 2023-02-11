import React, { useEffect, useState } from "react";
import PageLayout from "../../../components/PageLayout";
import CreateEditSport from "./create-edit-sport";
import ListSport from "./list-sport";

const SportManagement = () => {
  const [isCreate, setIsCreated] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleClose = () => {
    setIsCreated(false);
  };

  const handleCreate = () => {
    setIsCreated(true);
  };

  const handleOpenEdit = () => {
    setIsOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setIsOpenEdit(false);
  };

  useEffect(() => {
    console.log(isOpenEdit);
    console.log(isOpenEdit);
  }, [isOpenEdit]);

  return (
    <div>
      <PageLayout>
        {isCreate ? (
          <CreateEditSport onClose={handleClose} />
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
