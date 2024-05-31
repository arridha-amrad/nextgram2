import MySpinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useFormStatus } from "react-dom";

function SearchSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant="outline" size="icon">
      {pending ? <MySpinner /> : <Search className="w-4 h-4" />}
    </Button>
  );
}

export default SearchSubmitButton;
