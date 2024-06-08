import { useResponsive } from "ahooks";
import { Collapse, Drawer } from "antd";
import UserC from "./user";

const DrawerComp = ({ itemsMenu, activeMenu, collapsed, setCollapsed }) => {
  const responsive = useResponsive();

  return (
    <>
      <Drawer
        open={collapsed && !responsive["md"]}
        onClose={() => {
          setCollapsed(false);
        }}
        placement="left"
      >
        <UserC />

        <div>
          {itemsMenu?.map((item, index) => {
            return (
              <div key={index}>
                <Collapse
                  ghost
                  items={[
                    {
                      key: "1",
                      label: (
                        <div
                          className={`${
                            activeMenu == item?.key ? "bg-[#e6f4ff]" : "iii"
                          } my2 p-3 rounded-sm text-[16px] cursor-pointer`}
                          onClick={item?.onClick}
                        >
                          <span>{item?.label}</span>
                        </div>
                      ),
                      children: (
                        <>
                          {item?.children && (
                            <div className="ms-3 child">
                              {item?.children.map((child, indexChild) => {
                                return (
                                  <div
                                    key={indexChild}
                                    className={`${
                                      activeMenu == child?.key
                                        ? "bg-[#e6f4ff]"
                                        : "iii"
                                    } my-2 p-3 rounded-sm text-[13px] cursor-pointer`}
                                    onClick={child?.onClick}
                                  >
                                    <span>{child?.label}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComp;
