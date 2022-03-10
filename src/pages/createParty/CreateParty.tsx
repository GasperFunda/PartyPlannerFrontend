import { message } from "antd";
import * as React from "react";
import { useCallback, useState } from "react";
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
      console.log(data);
      console.log(newData);
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
      const finishedData = { ...data, ...invitations };
      message.success("Your invitations have been sent out!");
      // TODO: Call backend and go to home/party details page
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
