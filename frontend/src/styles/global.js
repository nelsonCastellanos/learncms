import {css} from "lit";

export const gridStyles = css`
    body, html, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
    
    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    .row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 15px;
        width: 100%;
    }
    
    .col {
        padding: 15px;
        text-align: center;
        font-size: 20px;
    }
    
    .col-1 { grid-column: span 1; }
    .col-2 { grid-column: span 2; }
    .col-3 { grid-column: span 3; }
    .col-4 { grid-column: span 4; }
    .col-5 { grid-column: span 5; }
    .col-6 { grid-column: span 6; }
    .col-7 { grid-column: span 7; }
    .col-8 { grid-column: span 8; }
    .col-9 { grid-column: span 9; }
    .col-10 { grid-column: span 10; }
    .col-11 { grid-column: span 11; }
    .col-12 { grid-column: span 12; }
    
    @media (min-width: 576px) {
        .col-sm-1 { grid-column: span 1; }
        .col-sm-2 { grid-column: span 2; }
        .col-sm-3 { grid-column: span 3; }
        .col-sm-4 { grid-column: span 4; }
        .col-sm-5 { grid-column: span 5; }
        .col-sm-6 { grid-column: span 6; }
        .col-sm-7 { grid-column: span 7; }
        .col-sm-8 { grid-column: span 8; }
        .col-sm-9 { grid-column: span 9; }
        .col-sm-10 { grid-column: span 10; }
        .col-sm-11 { grid-column: span 11; }
        .col-sm-12 { grid-column: span 12; }
    }
    
    @media (min-width: 768px) {
        .col-md-1 { grid-column: span 1; }
        .col-md-2 { grid-column: span 2; }
        .col-md-3 { grid-column: span 3; }
        .col-md-4 { grid-column: span 4; }
        .col-md-5 { grid-column: span 5; }
        .col-md-6 { grid-column: span 6; }
        .col-md-7 { grid-column: span 7; }
        .col-md-8 { grid-column: span 8; }
        .col-md-9 { grid-column: span 9; }
        .col-md-10 { grid-column: span 10; }
        .col-md-11 { grid-column: span 11; }
        .col-md-12 { grid-column: span 12; }
    }
    
    @media (min-width: 992px) {
        .col-lg-1 { grid-column: span 1; }
        .col-lg-2 { grid-column: span 2; }
        .col-lg-3 { grid-column: span 3; }
        .col-lg-4 { grid-column: span 4; }
        .col-lg-5 { grid-column: span 5; }
        .col-lg-6 { grid-column: span 6; }
        .col-lg-7 { grid-column: span 7; }
        .col-lg-8 { grid-column: span 8; }
        .col-lg-9 { grid-column: span 9; }
        .col-lg-10 { grid-column: span 10; }
        .col-lg-11 { grid-column: span 11; }
        .col-lg-12 { grid-column: span 12; }
    }

    @media (min-width: 1200px) {
        .col-xl-1 { grid-column: span 1; }
        .col-xl-2 { grid-column: span 2; }
        .col-xl-3 { grid-column: span 3; }
        .col-xl-4 { grid-column: span 4; }
        .col-xl-5 { grid-column: span 5; }
        .col-xl-6 { grid-column: span 6; }
        .col-xl-7 { grid-column: span 7; }
        .col-xl-8 { grid-column: span 8; }
        .col-xl-9 { grid-column: span 9; }
        .col-xl-10 { grid-column: span 10; }
        .col-xl-11 { grid-column: span 11; }
        .col-xl-12 { grid-column: span 12; }
    }
`;
