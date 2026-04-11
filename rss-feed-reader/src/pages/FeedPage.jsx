import { Outlet } from "react-router";

import FeedItemsList from "../components/feed/FeedItemsList";
import FeedNav from "../components/feed/FeedNav";

export default function FeedPage() {
  return (
    <div className="flex h-98/105">
      <aside className="bg-gray-50 border-r-1 border-gray-200 h-full w-1/5">
        {/* page nav goes here */}
        <FeedNav />
      </aside>
      <main className="h-full w-4/5">
        {/* main content goes here */}
        <Outlet />
      </main>
    </div>
  );
}
