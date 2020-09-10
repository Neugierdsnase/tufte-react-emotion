/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

const generateUuidv4 = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : r & (0x3 | 0x8)
    return v.toString(16)
  })
}

const CssBaseLine = styled.div`
  font-size: 15px;
  width: 87.5%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12.5%;
  font-family: et-book, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
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
`

const Heading: FunctionComponent<{ sans?: boolean; danger?: boolean; numeral?: boolean }> = ({
  danger,
  sans,
  numeral,
  children,
}) => {
  const dangerStyling = danger ? 'color: red;' : ''
  const numeralStyling = numeral ? 'font-family: et-book-roman-old-style;' : ''
  const sansStyling = sans
    ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;`
    : ''
  const codeStyling = sans ? 'font-size: 1.2rem;' : 'font-size: 0.80em;'
  return (
    <h1
      css={css`
        font-weight: 400;
        margin-top: 4rem;
        margin-bottom: 1.5rem;
        font-size: 3.2rem;
        line-height: 1;
        ${sansStyling + dangerStyling + numeralStyling}
        & > code {
          ${codeStyling}
        }
      `}
    >
      {children}
    </h1>
  )
}

const Subheading: FunctionComponent<{ sans?: boolean; danger?: boolean; numeral?: boolean }> = ({
  danger,
  sans,
  numeral,
  children,
}) => {
  const dangerStyling = danger ? 'color: red;' : ''
  const numeralStyling = numeral ? 'font-family: et-book-roman-old-style;' : ''
  const sansStyling = sans
    ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;`
    : ''
  const codeStyling = sans ? 'font-size: 1.2rem;' : 'font-size: 0.80em;'
  return (
    <h2
      css={css`
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
      `}
    >
      {children}
    </h2>
  )
}

const Subsubheading: FunctionComponent<{ sans?: boolean; danger?: boolean; numeral?: boolean }> = ({
  danger,
  sans,
  numeral,
  children,
}) => {
  const dangerStyling = danger ? 'color: red;' : ''
  const numeralStyling = numeral ? 'font-family: et-book-roman-old-style;' : ''
  const sansStyling = sans
    ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;`
    : ''
  const codeStyling = sans ? 'font-size: 1.2rem;' : 'font-size: 0.80em;'
  return (
    <h3
      css={css`
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
      `}
    >
      {children}
    </h3>
  )
}

const Subtitle: FunctionComponent<{ sans?: boolean; danger?: boolean; numeral?: boolean }> = ({
  danger,
  sans,
  numeral,
  children,
}) => {
  const dangerStyling = danger ? 'color: red;' : ''
  const numeralStyling = numeral ? 'font-family: et-book-roman-old-style;' : ''
  const sansStyling = sans
    ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;`
    : ''
  return (
    <p
      css={css`
        font-style: italic;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        display: block;
        line-height: 1;
        ${sansStyling + dangerStyling + numeralStyling}
      `}
    >
      {children}
    </p>
  )
}

const Code = styled.code`
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 1rem;
  line-height: 1.42;
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. See https://github.com/edwardtufte/tufte-css/issues/81#issuecomment-261953409 */
`

const Codeblock: FunctionComponent<{ fullwidth?: boolean; sans?: boolean }> = ({ sans, fullwidth, children }) => {
  const sansStyling = sans ? 'font-size: 1.2rem;' : 'font-size: 0.80em;'
  return (
    <pre
      css={
        fullwidth
          ? css`
              font-size: 0.9rem;
              width: 90%;
              margin-left: 2.5%;
              overflow-x: auto;
              max-width: 90%;
              clear: both;
              @media (max-width: 760px) {
                width: 97%;
              }
              ${sansStyling}
            `
          : css`
              font-size: 0.9rem;
              width: 52.5%;
              margin-left: 2.5%;
              overflow-x: auto;
              @media (max-width: 760px) {
                width: 97%;
              }
              ${sansStyling}
            `
      }
    >
      {children}
    </pre>
  )
}

const Article = styled.article`
  padding: 5rem 0rem;
`

const Section = styled.section`
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > footer {
    width: 55%;
    @media (max-width: 760px) {
      width: 100%;
    }
  }
`

const Table: FunctionComponent<{ fullwidth?: boolean }> = ({ fullwidth, children }) => {
  return (
    <div
      css={css`
        overflow-x: auto;
        font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', sans-serif;
        @media (max-width: 760px) {
          width: 85%;
        }
      `}
    >
      <table
        css={
          fullwidth
            ? css`
                width: 100%;
                clear: both;
              `
            : css`
                width: 55%;
                @media (max-width: 760px) {
                  width: 85%;
                }
              `
        }
      >
        {children}
      </table>
    </div>
  )
}

const Paragraph: FunctionComponent<{ sans?: boolean; danger?: boolean; numeral?: boolean }> = ({
  danger,
  numeral,
  sans,
  children,
}) => {
  const dangerStyling = danger ? 'color: red;' : ''
  const numeralStyling = numeral ? 'font-family: et-book-roman-old-style;' : ''
  const sansStyling = sans
    ? `font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif; letter-spacing: .03em;`
    : ''
  const codeStyling = sans ? 'font-size: 1.2rem;' : 'font-size: 0.80em;'

  return (
    <p
      css={css`
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
      `}
    >
      {children}
    </p>
  )
}

const Newthought = styled.span`
  font-variant: small-caps;
  font-size: 1.2em;
`

const Seperator = styled.hr`
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
`

const OrderedList = styled.ol`
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
`
const UnorderedList = styled.ul`
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
`

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 0.25rem;
  }
`

// TODO: needs some reconsideration
const A = styled.a`
  &:link,
  &:visited {
    color: inherit;
  }

  .no-tufte-underline:link {
    background: unset;
    text-shadow: unset;
  }

  &:link,
  .tufte-underline,
  .hover-tufte-underline:hover {
    text-decoration: none;
    background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8),
      -webkit-linear-gradient(currentColor, currentColor);
    background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8),
      linear-gradient(currentColor, currentColor);
    -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    background-repeat: no-repeat, no-repeat, repeat-x;
    text-shadow: 0.03em 0 #fffff8, -0.03em 0 #fffff8, 0 0.03em #fffff8, 0 -0.03em #fffff8, 0.06em 0 #fffff8,
      -0.06em 0 #fffff8, 0.09em 0 #fffff8, -0.09em 0 #fffff8, 0.12em 0 #fffff8, -0.12em 0 #fffff8, 0.15em 0 #fffff8,
      -0.15em 0 #fffff8;
    background-position: 0% 93%, 100% 93%, 0% 93%;

    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      &:link,
      .tufte-underline,
      .hover-tufte-underline:hover {
        background-position-y: 87%, 87%, 87%;
      }
    }

    &:link::selection,
    &:link::-moz-selection {
      text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe,
        -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe,
        -0.15em 0 #b4d5fe;
      background: #b4d5fe;
    }
  }
`

const Image = styled.img`
  max-width: 100%;
`

const SideNote: FunctionComponent = ({ children }) => {
  const [checked, setChecked] = React.useState(false)
  const uuid = generateUuidv4()

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
  `

  return (
    <div
      css={css`
        display: inline;
      `}
    >
      <label
        htmlFor={uuid}
        className='margin-toggle sidenote-number'
        css={css`
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
        `}
      />
      <input
        type='checkbox'
        id={uuid}
        css={css`
          display: none;
        `}
        onClick={() => setChecked(!checked)}
      />
      <span
        className='sidenote'
        css={
          checked
            ? css`
                ${spanBaseStyling}
                @media (max-width: 760px) {
                  display: block !important;
                  float: left !important;
                  left: 1rem !important;
                  clear: both !important;
                  width: 95% !important;
                  margin: 1rem 2.5% !important;
                  position: relative !important;
                }
              `
            : css`
                ${spanBaseStyling}
                @media (max-width: 760px) {
                  display: none;
                }
              `
        }
      >
        {children}
      </span>
    </div>
  )
}

const MarginNote: FunctionComponent = ({ children }) => {
  const [checked, setChecked] = React.useState(false)
  const uuid = generateUuidv4()
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
  `
  return (
    <div
      css={css`
        display: inline;
      `}
    >
      <label
        htmlFor={uuid}
        css={css`
          cursor: pointer;
          display: none;
          @media (max-width: 760px) {
            display: inline;
            cursor: pointer;
          }
        `}
      >
        &#8853;
      </label>
      <input
        type='checkbox'
        id={uuid}
        css={css`
          display: none;
        `}
        onClick={() => setChecked(!checked)}
      />
      <span
        css={
          checked
            ? css`
                ${spanBaseStyling}
                @media (max-width: 760px) {
                  display: block !important;
                  float: left !important;
                  left: 1rem !important;
                  clear: both !important;
                  width: 95% !important;
                  margin: 1rem 2.5% !important;
                }
              `
            : css`
                ${spanBaseStyling}
                @media (max-width: 760px) {
                  display: none;
                }
              `
        }
      >
        {children}
      </span>
    </div>
  )
}

const Blockquote: FunctionComponent<{ source: string; cite?: string }> = ({ children, cite, source }) => {
  return (
    <blockquote
      css={css`
        font-size: 1.4rem;
        @media (max-width: 760px) {
          margin-left: 1.5em;
          margin-right: 0em;
        }
      `}
    >
      <p
        css={css`
          width: 55%;
          margin-right: 40px;
          @media (max-width: 760px) {
            width: 100%;
          }
          & span.sidenote,
          & span.marginnote {
            margin-right: -82%;
            min-width: 59%;
            text-align: left;
          }
        `}
      >
        {children}
      </p>
      <footer
        css={css`
          width: 55%;
          font-size: 1.1rem;
          text-align: right;
          @media (max-width: 760px) {
            width: 100%;
          }
        `}
      >
        {cite ? <A href={cite}>{source}</A> : source}
      </footer>
    </blockquote>
  )
}

const Epigraph: FunctionComponent<{ text: string; source: string; cite?: string }> = ({ text, cite, source }) => {
  return (
    <blockquote
      css={css`
        font-size: 1.4rem;
        margin-top: 3em;
        margin-bottom: 3em;
        font-style: italic;
      `}
    >
      <p
        css={css`
          width: 55%;
          margin-right: 40px;
          font-style: italic;
        `}
      >
        {text}
      </p>
      <footer
        css={css`
          width: 55%;
          font-size: 1.1rem;
          text-align: right;
          font-style: normal;
        `}
      >
        {source}{' '}
        <cite
          css={css`
            font-style: italic;
          `}
        >
          {cite}
        </cite>
      </footer>
    </blockquote>
  )
}

const Figure: FunctionComponent<{ imgUrl: string; altText?: string; caption?: string; fullwidth?: boolean }> = ({
  imgUrl,
  altText,
  caption,
  fullwidth,
  children,
}) => {
  return (
    <figure
      css={
        fullwidth
          ? css`
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
              -webkit-margin-start: 0;
              -webkit-margin-end: 0;
              margin: 0 0 3em 0;
              max-width: 90%;
              clear: both;
              @media (max-width: 760px) {
                max-width: 90%;
              }
            `
          : css`
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
              max-width: 55%;
              -webkit-margin-start: 0;
              -webkit-margin-end: 0;
              margin: 0 0 3em 0;
            `
      }
    >
      {children}
      <img
        css={css`
          max-width: 100%;
        `}
        src={imgUrl}
        alt={altText}
      />
      <figcaption
        css={css`
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
        `}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

const IFrame: FunctionComponent<{ source: string; fullwidth?: boolean }> = ({ fullwidth, source }) => {
  const fullwidthStyling = fullwidth
    ? `
    max-width: 90%;
    clear:both; 
    @media (max-width: 760px) {
      max-width: 90%;
    }`
    : ''

  return (
    <div
      css={css`
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
      `}
    >
      <iframe
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
        src={source}
      />
    </div>
  )
}
