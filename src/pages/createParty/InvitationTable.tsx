import { Checkbox, Table as AntdTable } from "antd";
import { ColumnsType } from "antd/lib/table";
import { InvitationsTableData } from "../../types/invitations";

export interface IInvitationTableProps {
  data: InvitationsTableData[];
}

export function InvitationTable({ data }: IInvitationTableProps) {
  const columns: ColumnsType<InvitationsTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "Invite",
      render: (invite: boolean) => (
        <Checkbox
          type="checkbox"
          checked={invite}
          className="projectCheckbox"
        />
      ),
    },
  ];
  return (
    <div hidden={!data.length}>
      <AntdTable
        columns={columns}
        dataSource={data}
        bordered={false}
        pagination={{ pageSize: 4 }}
      ></AntdTable>
    </div>
  );
}
