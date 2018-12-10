// Import React
import React from "react";
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
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
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">Variables</Heading>
          <CodePane lang="js" source={require('raw-loader!./assets/vars')} textSize="20" theme="external" contentEditable />
        </Slide>
      </Deck>
    );
  }
}
