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
import preloader from "spectacle/lib/utils/preloader";

const images = {
  jsState: require('../assets/dependencies_js.jpg')
}

preloader(images);

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

theme.screen.global['.spectacle-content'] = {
  maxHeight: "unset"
}

const CustomList = styled(List)`
  line-height: 1.2;
`;

const StyledListItem = styled(ListItem)`
  margin-bottom: 0.6em;
  list-style-position: initial;
`;

const HeadingStyled = styled(Heading)`
  margin-bottom: 0.4em;
`
const CodeStyled = styled(Code)`
  font-size: inherit;
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
          <HeadingStyled size={2} textColor="secondary">Goal 🥅</HeadingStyled>
          <CustomList>
            <StyledListItem>Get to know essential syntax in order to get productive.</StyledListItem>
            <StyledListItem>Recognize common baseline in the team</StyledListItem>
            <StyledListItem>Introduction to new Frontend architecture</StyledListItem>
          </CustomList>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <HeadingStyled size={4} textColor="secondary" caps>Boilerplate Code</HeadingStyled>
          <HeadingStyled size={6} textColor="secondary">
            <Link href="https://github.com/mifrej/es6-essentials" target="_blank" > https://github.com/mifrej/es6-essentials</Link>
          </HeadingStyled>
          <Text>We will be coding it in Code Sandbox</Text>
        </Slide>
        <Slide>
          <HeadingStyled size={2}>ES Modules</HeadingStyled>
          <Text>Exports</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/modules_export')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide>
          <HeadingStyled size={2}>ES Modules</HeadingStyled>
          <Text>Imports</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/modules_import')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Exercise</HeadingStyled>
          <HeadingStyled size={6} textAlign="left">In <Code>src/es6/starter/modules.js</Code></HeadingStyled>
          <CustomList ordered>
            <StyledListItem>Setup a function as <Code>default export</Code></StyledListItem>
            <StyledListItem>Setup at least 2 <Code>named exports</Code></StyledListItem>
          </CustomList>
          <HeadingStyled size={6} textAlign="left">In <Code>src/index.js</Code></HeadingStyled>
          <CustomList ordered>
            <StyledListItem>Import <Code>default export</Code> and execute it</StyledListItem>
            <StyledListItem>Import <Code>named exports</Code> and console log them</StyledListItem>
          </CustomList>
        </Slide>
        <Slide transition={["fade"]}>
          <HeadingStyled size={2} textColor="secondary">Variables</HeadingStyled>
          <HeadingStyled size={4} textColor="secondary">Hoisting</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/vars_hoisting')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide transition={["fade"]}>
          <HeadingStyled size={2} textColor="secondary">Variables</HeadingStyled>
          <HeadingStyled size={4}>New types - <CodeStyled>const</CodeStyled> and <CodeStyled>let</CodeStyled></HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/vars')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide>
          <HeadingStyled size={3} textColor="secondary"><CodeStyled>const, let</CodeStyled> characteristics</HeadingStyled>
          <CustomList>
            <StyledListItem>Both are block scoped <Code>{`{ let foo = 5 }`}</Code></StyledListItem>
            <StyledListItem>Cannot be redeclared</StyledListItem>
            <StyledListItem><Code>const</Code> is read only (although you may add and change object properties)</StyledListItem>
            <StyledListItem>They are not hoisted by the interpreter</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <HeadingStyled size={2}>Exercise</HeadingStyled>
          <CustomList ordered>
            <StyledListItem>
              In file <Code>src/es6/starter/variables.js</Code>,
              convert <Code>var me</Code> to a <Code>const</Code> type.<br />
            </StyledListItem>
            <StyledListItem>Add <Code>surname</Code> prop to the object in <Code>const me</Code></StyledListItem>
            <StyledListItem>Fix the for loop to console log consequent iteration number</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <HeadingStyled size={4}>Template strings</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/template_strings')} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Exercise</HeadingStyled>
          <CustomList ordered>
            <StyledListItem>Rewrite ES5 string concatenation, into template string  <Code>src/es6/starter/template_strings.js</Code></StyledListItem>
            <StyledListItem>List members names with consequent numbers. Each member name should be introduced in new line, like (<Code>Member nr 1 is Alexander</Code>)</StyledListItem>
          </CustomList>
        </Slide>

        <Slide>
          <HeadingStyled size={4}>Tagged templates</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/tagged_templates')} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide>
          <HeadingStyled size={4}>Browser native DOM selector methods</HeadingStyled>
          <Text textColor="secondary">Where is my $ selector 😲</Text>
          <Image src="https://media.giphy.com/media/3o84U72tKO389H2lI4/giphy.gif"/>
        </Slide>

        <Slide>
          <HeadingStyled size={4}>JS state today 😱</HeadingStyled>
          <Image src={images.jsState} />
        </Slide>

        <Slide>
          <HeadingStyled size={4}>Native browser <CodeStyled>document</CodeStyled> object methods for DOM manipulations</HeadingStyled>
          <CustomList>
            <StyledListItem><Code>getElementById('id_of_element')</Code></StyledListItem>
            <StyledListItem><Code>querySelector('any_selector')</Code></StyledListItem>
            <StyledListItem><Code>querySelectorAll('any_selector')</Code></StyledListItem>
            <StyledListItem><Code>appendChild(node)</Code></StyledListItem>
            <StyledListItem><Code>append((Node or DOMString)... nodes)</Code></StyledListItem>
            <StyledListItem><Code>createElement('tagName')</Code></StyledListItem>
          </CustomList>
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Exercise</HeadingStyled>
          <CustomList ordered>
            <StyledListItem>Append provided ul list to a document</StyledListItem>
            <StyledListItem>Select all nodes with <Code>[data-time]</Code> attribute</StyledListItem>
            <StyledListItem>Select all nodes with classname <Code>special-element</Code></StyledListItem>
            <StyledListItem>Create new <Code>ul</Code> list with one <Code>li</Code></StyledListItem>
            <StyledListItem>Append new created list to a DOM</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <HeadingStyled size={3}>Function declaration</HeadingStyled>
          <HeadingStyled size={5}>With Hoisting</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/function_hoisting')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide>
          <HeadingStyled size={3}>Function expression</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/function_expression')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide>
          <HeadingStyled size={3}>Arrow <Code>=></Code> function</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/arrow_function')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={3}>=> Function characteristics</HeadingStyled>
          <CustomList>
            <StyledListItem>Does not change <Code>this</Code> context</StyledListItem>
            <StyledListItem>Doesn't have keyword <Code>arguments</Code></StyledListItem>
            <StyledListItem>Does not replace regular function declaration</StyledListItem>
            <StyledListItem>Reduce code boilerplate when anonymous function required</StyledListItem>
          </CustomList>
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Exercise</HeadingStyled>
          <CustomList ordered>
            <StyledListItem>Rewrite ES5 functions to arrow functions from <Code>src/es6/starter/arrow_function.js</Code></StyledListItem>
            <StyledListItem>Fix script from <Code>src/es6/starter/arrow_function_this.js</Code></StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <HeadingStyled size={2}>Default function arguments</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/function_default_arguments')} textSize="22" theme="external" contentEditable />
        </Slide>
        <Slide>
          <HeadingStyled size={2}>Object literal improvements</HeadingStyled>
          <CodePane lang="js" source={require('raw-loader!./assets/object_literal_improvements')} textSize="22" theme="external" contentEditable />
        </Slide>
      </Deck>
    );
  }
}
