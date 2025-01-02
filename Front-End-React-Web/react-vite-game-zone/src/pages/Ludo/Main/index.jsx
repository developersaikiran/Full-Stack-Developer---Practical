import { HappyCasualMan } from "@config/imageData";
import { Clsx } from "@utils";
import LudoBoardScreen from "../LudoBoardScreen/LudoBoardScreen";
import MainStyle from "./Main.module.css";
import bgVerticleImage from '../../../assets/ludo/images/verticle-bg.jpg';
import bghorizontalImage from '../../../assets/ludo/images/bg.jpg';
import { Player } from "@lottiefiles/react-lottie-player";
import girlAnimation from '../../../assets/ludo/animation/girl.json';

const LudoMainPage = () => {
    return (
        <>
            <div className={Clsx("h-m-inherit", MainStyle.ludoSection)} style={{ backgroundImage: `url(${bgVerticleImage})`, backgroundPosition: 'center' }}>

                {/* game section */}
                <div className={Clsx(MainStyle.gameCardSection)} style={{ backgroundImage: `url(${import('../../../assets/ludo/images/bg.jpg')})` }}>
                    <LudoBoardScreen />
                </div>

                {/* communication section */}
                <div className={MainStyle.communicationSection} >
                    <div className="pa-5 p-0 h-full" style={{height: '100%'}}>
                        <div className={Clsx("bg-owl h-m-inherit", MainStyle.authCover)}>
                            <div className={MainStyle.authImageContainer} >
                                {/* <Player
                                    autoplay
                                    loop={true}
                                    src={girlAnimation}
                                    style={{  }}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LudoMainPage;
