import { Dropdown, Space } from "antd";

const DropdownNav = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <>
      <Space wrap className="flex gap-7 items-center justify-between">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <span className="cursor-pointer drop-down">Design spotlight</span>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <span className="cursor-pointer drop-down">Business</span>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <span className="cursor-pointer drop-down">Education</span>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <span className="cursor-pointer drop-down">Plans and pricing</span>
        </Dropdown>
      </Space>
    </>
  );
};

export default DropdownNav;
