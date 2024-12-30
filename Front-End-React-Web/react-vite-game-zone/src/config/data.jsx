function getItem(label, key, icon, children, type){
    return {
        key,
        icon,
        children,
        label,
        type,
    }
}

export const sideBarMenuItems = [
    getItem(
        "MAIN",
        "main-group",
        null,
        [
            getItem("Dashboard", "/dashboard", <i className="ri-dashboard-fill"></i>)
        ],
        "group"
    ),
    {
        type: "divider",
    },
    getItem(
        "GAMES",
        "games-group",
        null,
        [
            getItem(
                "Ludo",
                "ludo",
                <i className="ri-dashboard-fill"></i>,
                [
                  getItem("Ludo Offline", "/ludo/offline"),
                  getItem("Ludo Online", "/ludo/online"),
                ]
              ),
        ],
        "group"
    )
]