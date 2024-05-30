import { useFormStatus } from "react-dom";
import { Button } from "../../ui/button";
import MySpinner from "@/components/Spinner";

function LoginSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="min-w-[150px]" disabled={pending}>
      {pending ? (
        <>
          <MySpinner className="mr-3" />
          loading...
        </>
      ) : (
        "Login"
      )}
    </Button>
  );
}

export default LoginSubmitButton;
