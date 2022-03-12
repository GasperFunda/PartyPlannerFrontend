import { Button, Switch, Space } from "antd";
import Text from "antd/lib/typography/Text";
import querystring from 'querystring'

export default function PartyFilters() {
    var parameters : string[] = [];
    var publicParties = false, myParties = false, myInvitations = false;

    function reloadPageWithFilters() {
        window.location.href = "/home/" + querystring.stringify({tags: parameters.join()});
    }

    function handleChange(handle: string, filterChecked: boolean) {
        if (!parameters.includes(handle) && filterChecked) {
            parameters.push(handle);
        }

        if (parameters.includes(handle) && !filterChecked) {
            var temp = parameters.filter(function (value) {
                return value != handle;
            });

            parameters = temp;
        }
    }

    return (
        <Space size="middle" className="filtersContainer">
            <Space size="small">
                <Text className="filterTitle">Public</Text>
                <Switch
                    className="filterSwitch"
                    onChange={() => (
                        publicParties = !publicParties,
                        handleChange("public", publicParties)
                    )}
                ></Switch>
            </Space>
            <Space size="small">
                <Text className="filterTitle">My parties</Text>
                <Switch
                    className="filterSwitch"
                    onChange={() => (
                        myParties = !myParties,
                        handleChange("myParties", myParties)
                    )}
                ></Switch>
            </Space>
            <Space size="small">
                <Text className="filterTitle">My invitations</Text>
                <Switch
                    className="filterSwitch"
                    onChange={() => (
                        myInvitations = !myInvitations,
                        handleChange("myInvitations", myInvitations)
                    )}
                ></Switch>
            </Space>
            <Button
                type="primary"
                className="buttonConfirm"
                onClick={reloadPageWithFilters}
            >CONFIRM</Button>
        </Space >
    );
}
