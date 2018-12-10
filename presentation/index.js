// Import React
import React from "react";
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import './assets/cobalt2.prism.css'

const theme = createTheme({
  primary: "#ffc600",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "white"
}, {
  primary: {
    name: "Roboto Condensed",
    googleFont: true
  },
  secondary: "Helvetica"
});

const CustomList = styled(List)`
  line-height: 1.2;
`;

const StyledListItem = styled(ListItem)`
  margin-bottom: 0.6em;
  list-style-position: initial;
`;
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ES6 essentials
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">Goal 🥅</Heading>
          <CustomList>
            <StyledListItem>Get to know essential syntax in order to get productive.</StyledListItem>
            <StyledListItem>Recognize common baseline in the team</StyledListItem>
            <StyledListItem>Introduction to new Frontend architecture</StyledListItem>
          </CustomList>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Boilerplate Code</Heading>
          <Link href="https://github.com/mifrej/es6-essentials" target="blank" >Starter code -> https://github.com/mifrej/es6-essentials</Link>
          <Text>We will be coding it in Code Sandbox</Text>
        </Slide>
        <Slide>
          <Heading size={2}>ES Modules</Heading>
          <Text>Exports</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/modules_export')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide>
          <Heading size={2}>ES Modules</Heading>
          <Text>Imports</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/modules_import')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide>
          <Heading size={2}>Exercise</Heading>
          <CustomList ordered>
            <StyledListItem>Setup a function as <strong>default export</strong></StyledListItem>
            <StyledListItem>Setup at least <strong>2 named exports</strong></StyledListItem>
            <StyledListItem>Import <strong>default export</strong> and execute it</StyledListItem>
            <StyledListItem>Import <strong>named exports</strong> and console log them</StyledListItem>
          </CustomList>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">Variables</Heading>
          <Heading size={4} textColor="secondary">Hoisting</Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/vars_hoisting')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">Variables</Heading>
          <Heading size={4}>New types - <strong>const</strong> and <strong>let</strong></Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/vars')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide>
          <Heading size={2}>Exercise</Heading>
          <CustomList ordered>
            <StyledListItem>Convert var `name` to a const type</StyledListItem>
            <StyledListItem>Add "surname" prop to the object in `const name`</StyledListItem>
            <StyledListItem>Fix the for loop to console log consequent iteration number</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <Heading size={4}>Browser native DOM selector methods</Heading>
          <Text textColor="tertiary">Where is my $ selector 😲</Text>
          <Image src="https://media.giphy.com/media/3o84U72tKO389H2lI4/giphy.gif"/>
        </Slide>
        <Slide>
          <Heading size={4}>Native browser document methods for DOM manipulations</Heading>
          <CustomList>
            <StyledListItem><Code>getElementById</Code></StyledListItem>
            <StyledListItem><Code>querySelector</Code></StyledListItem>
            <StyledListItem><Code>querySelectorAll</Code></StyledListItem>
            <StyledListItem><Code>appendChild</Code></StyledListItem>
            <StyledListItem><Code>append</Code></StyledListItem>
            <StyledListItem><Code>createElement</Code></StyledListItem>
          </CustomList>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>Exercise</Heading>
          <CustomList ordered>
            <StyledListItem>Append provided ul list to a document</StyledListItem>
            <StyledListItem>Select all nodes with <Code>[data-time]</Code> attribute</StyledListItem>
            <StyledListItem>Select all nodes with classname <Code>special-element</Code></StyledListItem>
            <StyledListItem>Create new <Code>ul</Code> list with one <Code>li</Code></StyledListItem>
            <StyledListItem>Append new created list to a DOM</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <Heading size={3}>Function declaration</Heading>
          <Heading size={5}>With Hoisting</Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/function_hoisting')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide>
          <Heading size={3}>Function expression</Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/function_expression')} textSize="20" theme="external" contentEditable />
        </Slide>
        <Slide>
          <Heading size={3}>Arrow <Code>=></Code> function</Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/arrow_function')} textSize="20" theme="external" contentEditable />
        </Slide>
      </Deck>
    );
  }
}
