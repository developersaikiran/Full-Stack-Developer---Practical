import { Colors } from './Colors'
import pileGreenIcon from '../../../assets/ludo/images/piles/green.png';
import pileRedIcon from '../../../assets/ludo/images/piles/red.png';
import pileBlueIcon from '../../../assets/ludo/images/piles/blue.png';
import pileYellowIcon from '../../../assets/ludo/images/piles/yellow.png';

import diceNo1 from '../../../assets/ludo/images/dice/1.png';
import diceNo2 from '../../../assets/ludo/images/dice/2.png';
import diceNo3 from '../../../assets/ludo/images/dice/3.png';
import diceNo4 from '../../../assets/ludo/images/dice/4.png';
import diceNo5 from '../../../assets/ludo/images/dice/5.png';
import diceNo6 from '../../../assets/ludo/images/dice/6.png';

export const ludoImages = [
    {
        name: Colors.green,
        image: pileGreenIcon
    },
    {
        name: Colors.red,
        image: pileRedIcon
    },
    {
        name: Colors.blue,
        image: pileBlueIcon
    },
    {
        name: Colors.yellow,
        image: pileYellowIcon
    },
    {
        name: 1,
        image: diceNo1
    },
    {
        name: 2,
        image: diceNo2
    },
    {
        name: 3,
        image: diceNo3
    },
    {
        name: 4,
        image: diceNo4
    },
    {
        name: 5,
        image: diceNo5
    },
    {
        name: 6,
        image: diceNo6
    },
]

export const GetImage = (name) => {
    const found = ludoImages.find(e => e.name == name);
    return found ? found.image : null;
}