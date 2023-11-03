import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen space-y-4 justify-center">
      <h1 className="text-4xl font-bold mx-auto">Oops!</h1>
      <p className="text-3xl italic text-gray-500 mx-auto">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl not-italic mx-auto ">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}