import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center content-center w-full justify-center h-full gap-16 font-semibold">
      <Link
        href="tiptap"
        className="py-4 px-8 rounded-lg bg-indigo-100 drop-shadow-md text-3xl"
      >
        Tiptap
      </Link>
      <Link
        href="tiny"
        className="py-4 px-8 rounded-lg bg-indigo-100 drop-shadow-md text-3xl"
      >
        Tiny
      </Link>
      <Link
        href="quill"
        className="py-4 px-8 rounded-lg bg-indigo-100 drop-shadow-md text-3xl"
      >
        Quill
      </Link>
    </div>
  );
}
