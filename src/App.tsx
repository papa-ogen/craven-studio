import { Heading, Page, Text } from "@papa-ogen/craven-ui";

function App() {
  return (
    <main className="max-w-sm md:max-w-xl flex-col flex p-4 md:p-8 justify-center items-center flex-grow">
      <Heading>C Studio</Heading>
      <Page title="Web developer">
        <Text leading="loose">
          Hi, I work as a{" "}
          <Text as="span" weight="bold">
            fullstack developer
          </Text>
          . Mainly with React, TypeScript and NodeJS.
        </Text>
        <Text>Feel free to contact me if you are in need of a developer.</Text>
      </Page>
    </main>
  );
}

export default App;
