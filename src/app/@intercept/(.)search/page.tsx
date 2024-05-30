import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SearchInput from "./SearchInput";

export default function Page() {
  return (
    <Modal title="Search Users">
      <SearchInput />
    </Modal>
  );
}
