import { Button, Form as AntdForm, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Item } = AntdForm;

export default function AddWishlistForm() {
    return (<>
        <AntdForm name="login" className="form" >
            <Space size="small">
                <Input
                    className="input"
                    placeholder="Insert item here"
                />
                <Button
                    type="primary"
                    style={{
                        backgroundColor: "#5cdb95",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "20px"
                    }}
                    onClick={() => (window.location.href = "/create-party")}
                > ADD </Button>
            </Space>
        </AntdForm>
    </>);
}