import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import "./scripts/darkMode"; 

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
