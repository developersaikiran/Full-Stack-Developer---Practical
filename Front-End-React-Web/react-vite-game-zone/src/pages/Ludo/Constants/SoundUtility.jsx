import cheer from '../../../assets/ludo/sfx/cheer.mp3';
import collide from '../../../assets/ludo/sfx/collide.mp3';
import diceRoll from '../../../assets/ludo/sfx/dice_roll.mp3';
import gameStart from '../../../assets/ludo/sfx/game_start.mp3';
import girl1 from '../../../assets/ludo/sfx/girl1.mp3';
import girl2 from '../../../assets/ludo/sfx/girl2.mp3';
import girl3 from '../../../assets/ludo/sfx/girl3.mp3';
import homeWin from '../../../assets/ludo/sfx/home_win.mp3';
import home from '../../../assets/ludo/sfx/home.mp3';
import pileMove from '../../../assets/ludo/sfx/pile_move.mp3';
import safeSpot from '../../../assets/ludo/sfx/safe_spot.mp3';
import ui from '../../../assets/ludo/sfx/ui.mp3';

export const playSound = (soundName) => {
    try {
        const soundPath = getSoundPath(soundName);
        const audio = new Audio(soundPath);
        audio.play();
    }catch(error){
        console.log('Can not play the sound file', error);
    }
}

export const getSoundPath = (soundName) => {
    try {
        switch (soundName) {
            case 'cheer': 
                return cheer;
            case 'collide': 
                return collide;
            case 'dice_roll': 
                return diceRoll;
            case 'game_start': 
                return gameStart;
            case 'girl1': 
                return girl1;
            case 'girl2': 
                return girl2;
            case 'girl3': 
                return girl3;
            case 'home_win': 
                return homeWin;
            case 'home': 
                return home;
            case 'pile_move': 
                return pileMove;
            case 'safe_spot': 
                return safeSpot;
            case 'ui': 
                return ui;
            default:  
                throw new Error(`Sound ${soundName} not found`);

        }
    }catch(error){
        console.log('Can not play the sound file');
    }
}