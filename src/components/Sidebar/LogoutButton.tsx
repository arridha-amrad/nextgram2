import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import getSession from "@/getServerSession";
import { LogOut } from "lucide-react";

async function LogoutButton() {
  const session = await getSession();

  const action = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };

  if (!session) return null;
  return (
    <form action={action}>
      <Button variant="destructive" type="submit">
        <LogOut className="w-6 h-6 mr-2" />
        Logout
      </Button>
    </form>
  );
}

export default LogoutButton;
