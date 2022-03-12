import { FileImageOutlined } from "@ant-design/icons";
import { Form as AntdForm, Button, Input, Upload } from "antd";

const { Item } = AntdForm;

export interface IPartyPhotoFormProps {
  data: any;
  onSuccess: (data: any) => void;
  onBack: (data: any) => void;
  onUploadPhoto: (photo: any) => void;
}

export function PartyPhotoForm({
  data,
  onSuccess,
  onBack,
  onUploadPhoto,
}: IPartyPhotoFormProps) {
  return (
    <div>
      <AntdForm
        onFinish={onSuccess}
        requiredMark={"optional"}
        initialValues={data}
      >
        <div style={{ textAlign: "center" }}>
          <FileImageOutlined style={{ fontSize: "60px" }} />
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            Hmm, what about a photo?
          </h1>
          <h1 style={{ fontSize: "25px", textAlign: "center" }}>
            This is my cover photo!
          </h1>
        </div>
        <Item wrapperCol={{ offset: 9 }}>
          <Upload onChange={onUploadPhoto}>
            <Button className="button" type="primary">
              Upload a photo!
            </Button>
          </Upload>
        </Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Item>
            <Button
              onClick={() => onBack(data)}
              type="primary"
              danger
              className="buttonDanger"
            >
              Back
            </Button>
          </Item>
          <Item wrapperCol={{ offset: 9 }}>
            <Button className="button" type="primary" htmlType="submit">
              Next
            </Button>
          </Item>
        </div>
      </AntdForm>
    </div>
  );
}
