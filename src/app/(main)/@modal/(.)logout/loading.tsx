import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <main className="fixed inset-0 bg-background/20 flex items-center justify-center">
      <Spinner />
      <span className="ml-3">Preparing your logout</span>
    </main>
  );
}

export default Loading;
