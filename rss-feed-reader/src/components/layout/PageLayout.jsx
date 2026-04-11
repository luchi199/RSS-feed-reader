export default function PageLayout() {
  return (
    <div className="w-screen h-screen">
      <header className="flex justify-between align-center border-b-1 border-gray-200 h-2/30">
        <div className="flex justify-evenly items-center gap-6 px-4">
          <h1 className="text-2xl font-semibold">DevFeed</h1>
          <div className="flex gap-3 text-gray-500 text-md">
            <p className="hover:bg-gray-100 hover:text-gray-800 hover:shadow-sm px-2 py-1 rounded transition duration-300 ease-in-out">
              Feed
            </p>
            <p className="hover:bg-gray-100 hover:text-gray-800 hover:shadow-sm px-2 py-1 rounded transition duration-300 ease-in-out">
              Digest
            </p>
            <p className="hover:bg-gray-100 hover:text-gray-800 hover:shadow-sm px-2 py-1 rounded transition duration-300 ease-in-out">
              Discover
            </p>
          </div>
        </div>
      </header>
      <main className="flex h-98/105">
        <aside className="bg-gray-50 border-r-1 border-gray-200 h-full w-1/5">
          {/* page nav goes here */}
        </aside>
        <article className="h-full w-4/5">
          {/* main content goes here */}
        </article>
      </main>
    </div>
  );
}
