import { message } from "antd";
import axios from "axios";
import moment from "moment";
import * as React from "react";
import { useCallback, useState } from "react";
import { CreatePartyRequest, PartyFormRequest } from "../../types/party";
import PartyInviteForm from "./forms/PartyInviteForm";
import PartyLocationForm from "./forms/PartyLocationForm";
import PartyNameForm from "./forms/PartyNameForm";
import { PartyNotesForm } from "./forms/PartyNotesForm";
import { PartyPhotoForm } from "./forms/PartyPhotoForm";
import { PartyTimeForm } from "./forms/PartyTimeForm";

export interface ICreatePartyProps {}

export default function CreateParty(props: ICreatePartyProps) {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);

  const handleNextStep = useCallback(
    (newData: any) => {
      setData({ ...data, ...newData });
      setStep(step + 1);
    },
    [step, data]
  );

  const handlePrevStep = useCallback(
    (data: any) => {
      setStep(step - 1);
    },
    [step]
  );

  const handleUploadPhoto = useCallback((photo: any) => {
    console.log(photo);
  }, []);

  const handleSubmit = useCallback(
    (invitations: any) => {
      const finishedData: PartyFormRequest = { ...data, ...invitations };
      console.log(finishedData);
      const createPartyRequestBody: CreatePartyRequest = {
        partyName: finishedData.title,
        location: finishedData.location,
        private: finishedData.private,
        image: "/",
        description: finishedData.description,
        likes: 0,
        fk_user_host: localStorage.getItem("userID"),
        dateTime: `${moment(finishedData.date).format(
          "MMMM Do YYYY"
        )}, ${moment(finishedData.time).format("hh:mm")}`,
      };
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/parties/create`,
          createPartyRequestBody
        )
        .then((res) => {
          message.success("Party successfully created!");
          window.location.href = "/home";
        });
    },
    [data]
  );
  return (
    <div className="createPartyContainer">
      <h2>Step {step} of 6</h2>
      {step === 1 && <PartyNameForm data={data} onSuccess={handleNextStep} />}
      {step === 2 && (
        <PartyTimeForm
          data={data}
          onSuccess={handleNextStep}
          onBack={handlePrevStep}
        />
      )}
      {step === 3 && (
        <PartyLocationForm
          data={data}
          onSuccess={handleNextStep}
          onBack={handlePrevStep}
        />
      )}
      {step === 4 && (
        <PartyPhotoForm
          data={data}
          onSuccess={handleNextStep}
          onBack={handlePrevStep}
          onUploadPhoto={handleUploadPhoto}
        />
      )}
      {step === 5 && (
        <PartyNotesForm
          data={data}
          onSuccess={handleNextStep}
          onBack={handlePrevStep}
        />
      )}
      {step === 6 && (
        <PartyInviteForm
          data={data}
          onSuccess={handleSubmit}
          onBack={handlePrevStep}
        />
      )}
    </div>
  );
}
