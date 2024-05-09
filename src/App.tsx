import { useKBar } from "kbar";
import ControlK from "./ControlK";

export default function App() {
  return (
    <div className=" h-screen">
      <ControlK>
        <div className="flex justify-center p-8">
          <CommandButton />
        </div>
      </ControlK>

      <div className="flex w-full h-10 border-blue-300">
        <div className="bg-red-500 w-1/12">a</div>
        <div className="bg-green-600 w-2/12">b</div>
        <div className="bg-blue-700 w-9/12">c</div>
      </div>
    </div>
  );
}

function CommandButton() {
  const { query } = useKBar();
  return (
    <button
      onClick={query.toggle}
      className="flex items-center justify-center w-12 h-12 mr-4 bg-white border border-gray-200 rounded-lg dark:border dark:border-gray-700 dark:bg-gray-800 general-ring-state"
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.333 1a2.667 2.667 0 0 0-2.666 2.667v10.666a2.667 2.667 0 1 0 2.666-2.666H3.667a2.667 2.667 0 1 0 2.666 2.666V3.667a2.667 2.667 0 1 0-2.666 2.666h10.666a2.667 2.667 0 0 0 0-5.333Z"
        />
      </svg>
    </button>
  );
}
