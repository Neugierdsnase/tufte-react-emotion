import * as React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css } from '@emotion/core';
const generateUuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & (0x3 | 0x8));
        return v.toString(16);
    });
};
const CssBaseLine = styled.div `
    font-size: 15px; 
    width: 87.5%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12.5%;
    font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
    background-color: #fffff8;
    background-color: #fffff8;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23fff7d8' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    color: #111;
    max-width: 1400px;
    counter-reset: sidenote-counter;
    @media (max-width: 760px) {
      width: 84%;
      padding-left: 8%;
      padding-right: 8%; 
    }
`;
const Heading = props => {
    const dangerStyling = props.danger ? "color: red;" : "";
    const numeralStyling = props.numeral ? "font-family: et-book-roman-old-style;" : "";
    const sansStyling = props.sans ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;` : "";
    const codeStyling = props.sans ? "font-size: 1.2rem;" : "font-size: 0.80em;";
    return (React.createElement("h1", { css: css `
      font-weight: 400;
      margin-top: 4rem;
      margin-bottom: 1.5rem;
      font-size: 3.2rem;
      line-height: 1;
      ${sansStyling + dangerStyling + numeralStyling}
      & > code {
        ${codeStyling}
      } 
    ` }, props.children));
};
const Subheading = props => {
    const dangerStyling = props.danger ? "color: red;" : "";
    const numeralStyling = props.numeral ? "font-family: et-book-roman-old-style;" : "";
    const sansStyling = props.sans ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;` : "";
    const codeStyling = props.sans ? "font-size: 1.2rem;" : "font-size: 0.80em;";
    return (React.createElement("h2", { css: css `
      font-style: italic;
      font-weight: 400;
      margin-top: 2.1rem;
      margin-bottom: 1.4rem;
      font-size: 2.2rem;
      line-height: 1; 
      ${sansStyling + dangerStyling + numeralStyling}
      & > code {
        ${codeStyling}
      } 
    ` }, props.children));
};
const Subsubheading = props => {
    const dangerStyling = props.danger ? "color: red;" : "";
    const numeralStyling = props.numeral ? "font-family: et-book-roman-old-style;" : "";
    const sansStyling = props.sans ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;` : "";
    const codeStyling = props.sans ? "font-size: 1.2rem;" : "font-size: 0.80em;";
    return (React.createElement("h3", { css: css `
      font-style: italic;
      font-weight: 400;
      font-size: 1.7rem;
      margin-top: 2rem;
      margin-bottom: 1.4rem;
      line-height: 1; 
      ${sansStyling + dangerStyling + numeralStyling}
      & > code {
        ${codeStyling}
      } 
    ` }, props.children));
};
const Subtitle = props => {
    const dangerStyling = props.danger ? "color: red;" : "";
    const numeralStyling = props.numeral ? "font-family: et-book-roman-old-style;" : "";
    const sansStyling = props.sans ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;` : "";
    return (React.createElement("p", { css: css `
      font-style: italic;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      display: block;
      line-height: 1; 
      ${sansStyling + dangerStyling + numeralStyling}
    ` }, props.children));
};
const Code = styled.code `
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 1.0rem;
  line-height: 1.42;
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. See https://github.com/edwardtufte/tufte-css/issues/81#issuecomment-261953409 */
`;
const Codeblock = props => {
    const sansStyling = props.sans ? "font-size: 1.2rem;" : "font-size: 0.80em;";
    return (React.createElement("pre", { css: props.fullwidth ?
            css `
        font-size: 0.9rem;
        width: 90%;
        margin-left: 2.5%;
        overflow-x: auto; 
        max-width: 90%;
        clear:both;
        @media (max-width: 760px) {
          width: 97%;
        }
        ${sansStyling}
      ` :
            css `
        font-size: 0.9rem;
        width: 52.5%;
        margin-left: 2.5%;
        overflow-x: auto;
        @media (max-width: 760px) {
          width: 97%;
        }
        ${sansStyling}
      ` }, props.children));
};
const Article = styled.article `
  padding: 5rem 0rem; 
`;
const Section = styled.section `
    padding-top: 1rem;
    padding-bottom: 1rem; 
    & > footer {
      width: 55%; 
      @media (max-width: 760px) {
        width: 100%;
      }
    }
`;
const Table = props => {
    return (React.createElement("div", { css: css `
        overflow-x: auto;
        font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif;
        @media (max-width: 760px) {
          width: 85%;  
        }
        ` },
        React.createElement("table", { css: props.fullwidth ?
                css `
        width: 100%;
        clear:both; 
        ` :
                css `
        width: 55%; 
        @media (max-width: 760px) {
          width: 85%; 
        }
      ` }, props.children)));
};
const Paragraph = props => {
    const dangerStyling = props.danger ? "color: red;" : "";
    const numeralStyling = props.numeral ? "font-family: et-book-roman-old-style;" : "";
    const sansStyling = props.sans ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;` : "";
    const codeStyling = props.sans ? "font-size: 1.2rem;" : "font-size: 0.80em;";
    return (React.createElement("p", { css: css `
      font-size: 1.4rem;
      line-height: 2rem; 
      margin-top: 1.4rem;
      margin-bottom: 1.4rem;
      padding-right: 0;
      vertical-align: baseline; 
      section > & {
        width: 55%;
        @media (max-width: 760px) {
          width: 100%;
        }
      }
      blockquote & {
        width: 55%;
        margin-right: 40px;
        font-variant: small-caps;
        font-size: 1.2em;
      }
      ${dangerStyling + numeralStyling + sansStyling}
      & > code {
        ${codeStyling}
      } 
    ` }, props.children));
};
const Newthought = styled.span `
    font-variant: small-caps;
    font-size: 1.2em; 
`;
const Seperator = styled.hr `
    display: block;
    height: 1px;
    width: 55%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
    @media (max-width: 760px) {
      max-width: 760px; 
    }
`;
const OrderedList = styled.ol `
    font-size: 1.4rem;
    line-height: 2rem; 
    /* 50 + 5 == 55, to be the same width as paragraph */
    section > & {
        width: 50%;
        -webkit-padding-start: 5%;
        @media (max-width: 760px) {
          width: 90%;
        }
    }
`;
const UnorderedList = styled.ul `
    font-size: 1.4rem;
    line-height: 2rem;
    /* 50 + 5 == 55, to be the same width as paragraph */
    section > & {
        width: 50%;
        -webkit-padding-start: 5%;
        @media (max-width: 760px) {
          width: 90%;
        }
    }
`;
const ListItem = styled.li `
  &:not(:first-child) {
    margin-top: 0.25rem; 
  }
`;
// TODO: needs some reconsideration
const A = styled.a `
  &:link,
  &:visited {
    color: inherit; 
  }

  .no-tufte-underline:link {
      background: unset;
      text-shadow: unset;
  }

  &:link, .tufte-underline, .hover-tufte-underline:hover {
      text-decoration: none;
      background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(currentColor, currentColor);
      background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(currentColor, currentColor);
      -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
      -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
      background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
      background-repeat: no-repeat, no-repeat, repeat-x;
      text-shadow: 0.03em 0 #fffff8, -0.03em 0 #fffff8, 0 0.03em #fffff8, 0 -0.03em #fffff8, 0.06em 0 #fffff8, -0.06em 0 #fffff8, 0.09em 0 #fffff8, -0.09em 0 #fffff8, 0.12em 0 #fffff8, -0.12em 0 #fffff8, 0.15em 0 #fffff8, -0.15em 0 #fffff8;
      background-position: 0% 93%, 100% 93%, 0% 93%; 

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    &:link, .tufte-underline, .hover-tufte-underline:hover {
        background-position-y: 87%, 87%, 87%;
    }
  }

  &:link::selection,
  &:link::-moz-selection {
    text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
    background: #b4d5fe;
  }
}
`;
const Image = styled.img `
  max-width:100%;
`;
const SideNote = props => {
    const [checked, setChecked] = React.useState(false);
    const uuid = generateUuidv4();
    const spanBaseStyling = `
    float: right;
    clear: right;
    margin-right: -60%;
    width: 50%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.3;
    position: relative;
    &:before {
      font-family: et-book-roman-old-style;
      position: relative;
      vertical-align: baseline;
      content: counter(sidenote-counter) " ";
      font-size: 1rem;
      top: -0.5rem; 
    }
    & > code {
      font-size: 1rem; 
    }
  `;
    return (React.createElement("div", { css: css `display: inline;` },
        React.createElement("label", { htmlFor: uuid, className: "margin-toggle sidenote-number", css: css `
          cursor: pointer;
          counter-increment: sidenote-counter;
          display: inline;
          &:after {
            font-family: et-book-roman-old-style;
            position: relative;
            vertical-align: baseline;
            content: counter(sidenote-counter);
            font-size: 1rem;
            top: -0.5rem;
            left: 0.1rem; 
          }
          @media (max-width: 760px) {
            cursor: pointer; 
          }
        ` }),
        React.createElement("input", { type: "checkbox", id: uuid, css: css `
          display:none;
        `, onClick: () => setChecked(!checked) }),
        React.createElement("span", { className: "sidenote", css: checked ? css `
        ${spanBaseStyling}
        @media (max-width: 760px) {
          display: block !important;
          float: left !important;
          left: 1rem !important;
          clear: both !important;
          width: 95% !important;
          margin: 1rem 2.5% !important;
          position: relative !important;
        }` : css `
        ${spanBaseStyling}
        @media (max-width: 760px) {
          display: none;
        }` }, props.children)));
};
const MarginNote = props => {
    const [checked, setChecked] = React.useState(false);
    const uuid = generateUuidv4();
    const spanBaseStyling = `
    float: right;
    clear: right;
    margin-right: -60%;
    width: 50%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.3;
    vertical-align: baseline;
    position: relative;
    & > code {
      font-size: 1rem; 
    }
  `;
    return (React.createElement("div", { css: css `display:inline;
    ` },
        React.createElement("label", { htmlFor: uuid, css: css `
          cursor: pointer;
          display: none;
          @media (max-width: 760px) { 
            display: inline;
            cursor: pointer;
          }
        ` }, "\u2295"),
        React.createElement("input", { type: "checkbox", id: uuid, css: css `
          display:none;
        `, onClick: () => setChecked(!checked) }),
        React.createElement("span", { css: checked ?
                css `
          ${spanBaseStyling}
          @media (max-width: 760px) {
            display: block !important;
            float: left !important;
            left: 1rem !important;
            clear: both !important;
            width: 95% !important;
            margin: 1rem 2.5% !important;
          }` : css `
          ${spanBaseStyling}
          @media (max-width: 760px) {
            display: none;
          }` }, props.children)));
};
const Blockquote = props => {
    return (React.createElement("blockquote", { css: css `
        font-size: 1.4rem;
        @media(max-width: 760px) {
          margin-left: 1.5em;
          margin-right: 0em; 
        }
    ` },
        React.createElement("p", { css: css `
        width: 55%;
        margin-right: 40px;
        @media(max-width: 760px) {
          width: 100%; 
        }
        & span.sidenote,
        & span.marginnote {
          margin-right: -82%;
          min-width: 59%;
          text-align: left;
        }
      ` }, props.children),
        React.createElement("footer", { css: css `
        width: 55%;
        font-size: 1.1rem;
        text-align: right;
        @media(max-width: 760px) {
          width: 100%; 
        }
      ` }, props.cite ? React.createElement(A, { href: props.cite }, props.source) : props.source)));
};
const Epigraph = props => {
    return (React.createElement("blockquote", { css: css `font-size: 1.4rem;margin-top: 3em;margin-bottom: 3em;font-style: italic;` },
        React.createElement("p", { css: css `width: 55%;margin-right: 40px;font-style: italic;` }, props.text),
        React.createElement("footer", { css: css `width: 55%;font-size: 1.1rem;text-align: right;font-style: normal;` },
            props.source,
            " ",
            React.createElement("cite", { css: css `font-style: italic;` }, props.cite))));
};
const Figure = props => {
    return (React.createElement("figure", { css: props.fullwidth ?
            css `
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          -webkit-margin-start: 0;
          -webkit-margin-end: 0;
          margin: 0 0 3em 0;
          max-width: 90%;
          clear:both; 
          @media (max-width: 760px) {
            max-width: 90%;
          }
        ` :
            css `
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          max-width: 55%;
          -webkit-margin-start: 0;
          -webkit-margin-end: 0;
          margin: 0 0 3em 0;
        ` },
        props.children,
        React.createElement("img", { css: css `max-width: 100%;`, src: props.imgUrl, alt: props.altText }),
        React.createElement("figcaption", { css: css `
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          max-width: 55%;
          -webkit-margin-start: 0;
          -webkit-margin-end: 0;
          margin: 0 0 3em 0;
          margin-right: 24%;
          @media (max-width: 760px) {
            margin-right: 0%;
            max-width: none; 
          }
        ` }, props.caption)));
};
const IFrame = props => {
    const fullwidthStyling = props.fullwidth ? `
    max-width: 90%;
    clear:both; 
    @media (max-width: 760px) {
      max-width: 90%;
    }` : "";
    return (React.createElement("div", { css: css `
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
      vertical-align: baseline;
      max-width: 55%;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      margin: 0 0 3em 0;
      ${fullwidthStyling}
      @media (max-width: 760px) {
        max-width: 90%;
      }
    ` },
        React.createElement("iframe", { css: css `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `, src: props.source })));
};
