import React from "react";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useLocalStorageState } from "ahooks";
import HeaderComp from "../header";
import { HiHomeModern } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutTemplate } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const HomePage = () => {
  const [collapsed, setCollapsed] = useLocalStorageState("collapsed", {
    defaultValue: false,
  });
  const [activeMenu, setActiveMenu] = useLocalStorageState("activeMenu", {
    defaultValue: 1,
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh]">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-[100vh]"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${activeMenu}`]}
          items={[
            {
              key: "1",
              onClick: () => {
                setActiveMenu("1");
              },
              icon: <AiOutlineHome />,
              label: "Home",
            },
            {
              key: "2",
              onClick: () => {
                setActiveMenu("2");
              },
              icon: <VscFileSubmodule />,
              label: "Projects",
            },
            {
              key: "3",
              onClick: () => {
                setActiveMenu("3");
              },
              icon: <LuLayoutTemplate />,
              label: "Templates",
              children: [
                {
                  key: "4",
                  onClick: () => {
                    setActiveMenu("4");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Social Media",
                },
                {
                  key: "5",
                  onClick: () => {
                    setActiveMenu("5");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Education",
                },
                {
                  key: "6",
                  onClick: () => {
                    setActiveMenu("6");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Marketing",
                },
                {
                  key: "7",
                  onClick: () => {
                    setActiveMenu("7");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Video",
                },
                {
                  key: "8",
                  onClick: () => {
                    setActiveMenu("8");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Print products",
                },
                {
                  key: "9",
                  onClick: () => {
                    setActiveMenu("9");
                  },
                  icon: <VscFileSubmodule />,
                  label: "Card and invitations",
                },
              ],
            },
            {
              key: "10",
              onClick: () => {
                setActiveMenu("10");
              },
              icon: <CgMenuGridO />,
              label: "Apps",
            },
          ]}
        />
      </Sider>
      <Layout>
        <HeaderComp collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content
          style={{
            padding: 24,
            margin: "24px 16px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "scroll",
          }}
        >
          <div className="w-[100px] h[60vh]">
            {Array.from(
              {
                length: 100,
              },
              (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              )
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePage;
