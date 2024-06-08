import React from "react";
import { Layout, theme } from "antd";
import { useLocalStorageState } from "ahooks";
import HeaderComp from "../header";

import SliderComp from "./sider/sider";
import { Outlet } from "react-router";

const { Content, Sider } = Layout;

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
    <>
      <div>
        <HeaderComp collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className="h[100vh]">
          <div>
            <SliderComp
              activeMenu={activeMenu}
              colorBgContainer={colorBgContainer}
              collapsed={collapsed}
              setActiveMenu={setActiveMenu}
              setCollapsed={setCollapsed}
            />
          </div>

          <Layout>
            <Content
              style={{
                height: "88vh",
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                overflowY: "scroll",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default HomePage;
