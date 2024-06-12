import {css, unsafeCSS} from 'lit';
import containerStyles from './container_styles.css?inline';
import flexStyles from './flex_styles.css?inline';
import responsiveUtilities from './responsive_utilities.css?inline';
import colorStyles from './color_styles.css?inline';


export const gridStyles = [
    unsafeCSS(colorStyles),
    unsafeCSS(containerStyles),
    unsafeCSS(flexStyles),
    unsafeCSS(responsiveUtilities),
];
