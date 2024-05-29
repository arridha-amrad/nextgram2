import { useFormStatus } from "react-dom";
import { Button } from "../../ui/button";
import { Loader2 } from "lucide-react";

function LoginSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="min-w-[150px]" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          loading...
        </>
      ) : (
        "Login"
      )}
    </Button>
  );
}

export default LoginSubmitButton;
