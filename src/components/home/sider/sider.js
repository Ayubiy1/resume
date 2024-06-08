import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutTemplate } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { useNavigate } from "react-router";

import "./style.css";
import DrawerComp from "./drawer";
import UserC from "./user";

const SliderComp = ({
  setActiveMenu,
  activeMenu,
  colorBgContainer,
  collapsed,
  setCollapsed,
}) => {
  const navigate = useNavigate();

  const [itemsMenu, setItemMenus] = useState([
    {
      key: "home",
      onClick: () => {
        setActiveMenu("home");
        navigate("/");
      },
      icon: <AiOutlineHome />,
      label: "Home",
    },
    {
      key: "projects",
      onClick: () => {
        setActiveMenu("projects");
        navigate("/projects");
      },
      icon: <VscFileSubmodule />,
      label: "Projects",
    },
    {
      key: "templates",
      onClick: () => {
        setActiveMenu("templates");
      },
      icon: <LuLayoutTemplate />,
      label: "Templates",
      children: [
        {
          key: "social-Media",
          onClick: () => {
            setActiveMenu("social-Media");
          },
          icon: <VscFileSubmodule />,
          label: "Social Media",
        },
        {
          key: "education",
          onClick: () => {
            setActiveMenu("education");
          },
          icon: <VscFileSubmodule />,
          label: "Education",
        },
        {
          key: "marketing",
          onClick: () => {
            setActiveMenu("marketing");
          },
          icon: <VscFileSubmodule />,
          label: "Marketing",
        },
        {
          key: "video",
          onClick: () => {
            setActiveMenu("video");
          },
          icon: <VscFileSubmodule />,
          label: "Video",
        },
        {
          key: "print-products",
          onClick: () => {
            setActiveMenu("print-products");
          },
          icon: <VscFileSubmodule />,
          label: "Print products",
        },
        {
          key: "card-and-invitations",
          onClick: () => {
            setActiveMenu("card-and-invitations");
          },
          icon: <VscFileSubmodule />,
          label: "Card and invitations",
        },
      ],
    },
    {
      key: "apps",
      onClick: () => {
        setActiveMenu("apps");
      },
      icon: <CgMenuGridO />,
      label: "Apps",
    },
  ]);
  const number = 123456.789;

  console.log(
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(number)
  );

  return (
    <>
      <div className="hidden md:block">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`h-[93vh] pt-10`}
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="w-[100%] flex items-center justify-center">
            <div className="flex gap-3 items-center">
              {collapsed ? (
                <>
                  <img
                    className="rounded-full w-[40px]"
                    src="https://avatar.canva.com/avatars/users/ce73239c-1d03-412b-be85-c2a7bed55e0d/50.jpg"
                  />
                </>
              ) : (
                <UserC />
              )}
            </div>
          </div>

          <div className="demo-logo-vertical" />
          <Menu
            defaultSelectedKeys={[`${activeMenu}`]}
            items={itemsMenu}
            className="flex flex-col gap-2 mt-3"
          ></Menu>
        </Sider>
      </div>

      <div className="">
        <DrawerComp
          itemsMenu={itemsMenu}
          collapsed={collapsed}
          activeMenu={activeMenu}
          setCollapsed={setCollapsed}
        />
      </div>
    </>
  );
};

export default SliderComp;
