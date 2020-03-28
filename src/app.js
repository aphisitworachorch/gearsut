import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Vivus from "vivus"

// loads the Icon plugin
UIkit.use(Icons);

const gear = new Vivus('gearbanner', {
    duration: 200,
    animTimingFunction: Vivus.EASE_IN,
    file: 'images/GEARSUT-Banner.svg'
});
gear.play(1, function() {
});

