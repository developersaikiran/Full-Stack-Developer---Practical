import { Layout, Spin } from "antd"
import { Suspense, useContext, useEffect, useState } from "react"
import { BrowserRouter, Outlet, Routes } from "react-router-dom"
import MainHeader from "./MainHeader"
import { MainSideBar } from "./MainSideBar"
import { useMainContentHook } from "../../hooks/main/mainContent.hook"
import { sideBarMenuItems } from "../../config/data"
import styles from "./MainContent.module.css"
import { ThemeContext } from "../../contexts/ThemeProvider"

const MainContent = () => {
    const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
    const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");
    const {
        sidebarToggle,
        setHeaderPaddingLeft
    } = useContext(ThemeContext)

    const {
        isToken,
        isHeaderVisible,
        isSidebarVisible,
        isFooterVisible,
    } = useMainContentHook()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1399) {
                {
                    !sideBarCollapsed
                        ? setMarginLeft("var(--sidebar-width)")
                        : setMarginLeft("var(--sidebar-width-collapsed)");
                }
            } else {
                setMarginLeft("0");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [sideBarCollapsed]);

    useEffect(() => {
        sidebarToggle === true
          ? setHeaderPaddingLeft("75px")
          : setHeaderPaddingLeft("20px");
      }, [sidebarToggle]);

    return (
        <>
            <Layout hasSider style={{ minHeight: "100vh" }}>
                <Suspense fallback={<Spin />}>
                    <MainSideBar
                        collapsed={sideBarCollapsed}
                        handleSideBarCollapsed={(value) => setSideBarCollapsed(value)}
                        isSidebarVisible={isSidebarVisible}
                        items={sideBarMenuItems}
                    />
                    <Layout
                        style={{ marginLeft: marginLeft }}
                        className={styles.ContentLayout}
                    >
                        <MainHeader
                            isHeaderVisible={isHeaderVisible}
                        />
                        <main className={styles.MainContent}>
                            <Outlet />
                        </main>
                    </Layout>
                </Suspense>
                {/* </BrowserRouter> */}
            </Layout>
        </>
    )
}

export default MainContent