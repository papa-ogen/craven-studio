import { useRouteError } from "react-router-dom";
import { Heading, Page, StatusLabel } from "@papa-ogen/craven-ui";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <main className="max-w-sm md:max-w-xl flex-col flex p-4 md:p-8 justify-center items-center flex-grow">
      <Heading>Oops!</Heading>
      <Page title="Error">
        <div className="py-2">
          <StatusLabel type="error">
            {" "}
            Sorry, an unexpected error has occurred.
          </StatusLabel>
        </div>

        <p className="text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </Page>
    </main>
  );
}
