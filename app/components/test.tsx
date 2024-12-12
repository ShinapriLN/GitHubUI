import { Skeleton } from "@nextui-org/skeleton";

export default function App() {
  return (
    <div className="max-w-[300px] w-[300px] flex items-center gap-3 bg-red-400">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg bg-slate-300" />
        <Skeleton className="h-3 w-4/5 rounded-lg bg-slate-300" />
      </div>
    </div>
  );
}
