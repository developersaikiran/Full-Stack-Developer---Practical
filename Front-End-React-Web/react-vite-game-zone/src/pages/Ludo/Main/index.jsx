import { Col, Row } from "antd";
import { svgIcons } from "@config/svgIcons";
import { HappyCasualMan } from "@config/imageData";
import { Clsx } from "@utils";
import GameCard from "../Card/GameCard";
import MainStyle from "./Main.module.css";
// import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";

const LudoMainPage = () => {
    return (
        <>
            <div
                className={
                    Clsx("d-flex h-m-inherit",
                        MainStyle.authenticationWrapper
                    )}
            >
                <Row className="h-full h-m-inherit my-auto mx-0">
                    {/* game section */}
                    <Col xs={24} lg={24} xl={12}
                        className={Clsx("flex items-center justify-center", MainStyle.authContentCol )}
                        style={{ backgroundColor: 'red' }}
                    >
                        <GameCard />
                    </Col>

                    {/* communication section */}
                    <Col xs={12} className={MainStyle.authImageCol} >
                        <div className="pa-5 p-0 h-full">
                            <div className={
                                Clsx("bg-owl h-m-inherit",
                                    MainStyle.authCover
                                )}>
                                <div className={MainStyle.authImageContainer} >
                                    <img src={HappyCasualMan} alt="annakoot image" className={MainStyle.authImage} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default LudoMainPage;
