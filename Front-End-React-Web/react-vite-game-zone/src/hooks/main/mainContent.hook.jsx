import { suseState, useState } from "react";

export const useMainContentHook = () => {
	const isToken = localStorage.getItem("_token");

    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);
	const [isFooterVisible, setIsFooterVisible] = useState(true);

    return {
        isToken,
        isHeaderVisible,
        isSidebarVisible,
        isFooterVisible,
    }
}