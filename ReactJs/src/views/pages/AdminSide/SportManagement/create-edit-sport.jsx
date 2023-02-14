import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultipleSelect from "../../../components/Dropdown/multi-select";
import SingleSelect from "../../../components/Dropdown/single-select";
import CheckedIcon from "../../../components/Icons/checked-icon";
import TextFields from "../../../components/TextField";
import "../../../../styles/tooltip.css";
import UploadImage from "../../../components/UploadImage";
import {
  activeDatas,
  sportTypeDatas,
  defautSport,
} from "../../../../constants";
import HelpMenuIcon from "../../../components/Icons/help-menu-icon";
import ModalConfirm from "../../../components/ModalConfirm";
import SingleSelectV2 from "../../../components/Dropdown/single-select-v2";

const CreateEditSport = ({ onClose, action, sport }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSport, setSport] = useState(defautSport);
  const [validFrom, setValidForm] = useState({
    sportName: true,
    sportType: true,
    lastModifiedBy: true,
    lastModifiedDate: true,
    active: true,
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChangeSportName = (event) => {
    setSport({
      ...isSport,
      sportName: event.target.value,
    });
    setValidForm({ ...validFrom, sportName: true });
  };

  const handleChangeSportType = (event) => {
    setSport({
      ...isSport,
      sportType: event.target.value,
    });
    setValidForm({ ...validFrom, sportType: true });
  };

  const handleChangeSportActive = (event) => {
    setSport({
      ...isSport,
      active: event.target.value,
    });
    setValidForm({ ...validFrom, active: true });
  };

  useEffect(() => {
    setSport({ ...sport });
  }, [sport]);

  useEffect(() => {
    setValidForm({ ...validFrom });
  }, []);
  console.log(isSport.active);
  return (
    <div>
      <div className="font-barlow font-semibold	flex">
        <p
          className="text-ct4-dark-green text-sm uppercase cursor-pointer"
          onClick={() => onClose()}
        >
          Sports
        </p>
        <div className="mx-3 text-xs text-ct4-gray">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <p className="text-ct4-gray-3 text-sm uppercase">{action}</p>
      </div>
      <div className="mt-5 flex justify-between">
        <p className="font-barlow font-bold uppercase text-28">{action}</p>
        <div>
          <button
            className="uppercase w-140 h-10 border border-ct4-border-gray font-barlow font-bold text-sm rounded mr-3"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            className="uppercase w-140 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded"
            onClick={() => setShowModal(true)}
          >
            Save
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col mt-8 gap-y-4">
        {console.log(sportTypeDatas)}
        <TextFields
          name="Sport Name"
          required={true}
          width="600px"
          placeholder={"Group Name"}
          value={isSport.sportName}
          valid={validFrom.sportName}
          onChange={handleChangeSportName}
        />
        <SingleSelect
          name="Sport Type"
          required={true}
          width="600px"
          options={sportTypeDatas}
          value={isSport.sportType}
          valid={validFrom.sportType}
          onChange={handleChangeSportType}
        />
        <SingleSelectV2
          name="Active"
          required={true}
          options={activeDatas}
          value={isSport.active}
          valid={validFrom.active}
          onChange={handleChangeSportActive}
        />
        <UploadImage type="Sport Picture" />
      </div>
    </div>
  );
};

export default CreateEditSport;
