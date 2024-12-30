import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './MainSideBar.module.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'
import Clsx from '../../utils/Clsx'
import { svgIcons } from '../../config/svgIcons'

export const MainSideBar = ({
  handleSideBarCollapsed,
  collapsed,
  isSidebarVisible,
  items,
  ...rest
}) => {
  const { sideBarToggleBtn } = useContext(ThemeContext)
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const subMenuList = {
    main: [
      "/dashboard"
    ],
    games: [
      "ludo"
    ]
  }

  let selectedSubMenu = [];
  let subMenuName = []
  for (const [subMenuTitle, subMenuItems] of Object.entries(subMenuList)) {
    const selectedMenuData = subMenuItems?.some((subItems) => {
      if (pathname.includes(subItems)) {
        subMenuName.push(subItems);
      }
      return pathname.includes(subItems);
    });
    if (selectedMenuData) {
      selectedSubMenu.push(subMenuTitle);
      break;
    }
  }

  let selectMenuItem = [];
  let selectItem = null;

  if (selectItem) {
    selectMenuItem.push(selectItem.key);
  }

  return (
    <Sider
      breakpoint='xxl'
      collapsible
      collapsed={collapsed}
      onCollapse={handleSideBarCollapsed}
      style={{
        overflow: "auto",
        height: "calc(100vh - var(--sidebar-trigger-height))",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"var(--sidebar-width)"}
      className={Clsx(
        styles.Sidebar,
        sideBarToggleBtn && styles.SidebarUpdate
      )}
      collapsedWidth="var(--sidebar-width-collapsed)"
      {...rest}
    >
      {/* <div className={styles.SidebarLogoWrapper}>
        <Link to={"/"} className={Clsx(styles.SidebarLogo, "p-0")}>
          {collapsed == false ? svgIcons.logo : <span className={Clsx(styles.sidebarSmallLogo, "block w-full")}>{svgIcons.shortLogo}</span>}
        </Link>
      </div> */}
      <Menu
        mode="inline"
        items={items}
        className={styles.SidebarMenu}
        selectedKeys={
          subMenuName.length !== 0
            ? subMenuName
            : selectMenuItem.length !== 0
              ? selectMenuItem
              : [pathname]
        }
        onSelect={({ key }) => {
          navigate(key);
        }}
      />
    </Sider>
  )
}
