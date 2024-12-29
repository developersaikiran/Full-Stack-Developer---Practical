import { Spin } from "antd"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import MainHeader from "./MainHeader"
import MainSideBar from "./MainSideBar"
import { useMainContextHook } from "../../hooks/main/mainContent.hook"

const MainContent = () => {

    const {
        isToken,
        isHeaderVisible,
        isSidebarVisible,
        isFooterVisible,
    } = useMainContextHook()

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<Spin />}>
                    <MainHeader
                        isHeaderVisible={isHeaderVisible}
                    />
                    <div className="user-dashboard">
                        <MainSideBar
                            isSidebarVisible={isSidebarVisible}
                        />
                        Main content
                    </div>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MainContent