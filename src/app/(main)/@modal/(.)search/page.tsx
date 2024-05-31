import SearchFormAndResult from "./SearchFormAndResult";
import SearchDialog from "./Dialog";

export default async function Page() {
  return (
    <SearchDialog>
      <SearchFormAndResult />
    </SearchDialog>
  );
}
