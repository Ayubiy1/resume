import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, theme } from "antd";
import "./style.css";
import DropdownNav from "../dropdown-nav";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const { Header } = Layout;

const HeaderComp = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header
      style={{
        top: 0,
        left: 0,
        zIndex: 1,
        padding: 0,
        width: "100%",
        position: "sticky",
        borderBottom: "2px solid #80808021",
        background: colorBgContainer,
      }}
      className="flex items-center justify-between"
    >
      <div className="flex items-center ms-2">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 40,
            height: 40,
          }}
        />

        <img
          src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
          className="ms-3"
        />

        <div className="w[30%] hidden lg:block ms-5">
          <DropdownNav />
        </div>
      </div>

      <div className="hidden md:flex gap-5 items-center mr-3">
        <button type="primary" className="flex items-center btn-create">
          Create a desigin
        </button>

        <img
          className="rounded-full w-[40px]"
          src="https://avatar.canva.com/avatars/users/ce73239c-1d03-412b-be85-c2a7bed55e0d/50.jpg"
        />
      </div>

      <Button
        className="block md:hidden mr-3 text-[20px]"
        type="primary"
        onClick={showDrawer}
      >
        <IoMdMenu />
      </Button>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Header>
  );
};
export default HeaderComp;
