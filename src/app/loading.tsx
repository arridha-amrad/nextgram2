import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <main className="fixed inset-0 bg-background/20 flex items-center justify-center">
      <Spinner />
    </main>
  );
}

export default Loading;
