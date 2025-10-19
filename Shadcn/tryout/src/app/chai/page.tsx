import { Button } from "@/components/ui/button";

export default function ChaiPage() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div>ChaiPage 😁</div>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded my-3">
        Test Button
      </button>

      <Button variant="chai">Chai Button</Button>
      <Button variant="outline">ShadCN Button</Button>
    </main>
  );
}
