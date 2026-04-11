export default function FeedItem() {
  return (
    <div className="flex flex-col gap-2 border-b-1 border-gray-100 px-6 py-3">
      <div className="flex align-center gap-2">
        <p className="bg-pink-800 text-white text-center font-semibold rounded w-6 h-6">
          C
        </p>
        <p className="text-gray-500 text-sm">CSS-Tricks &#xb7; 2h ago</p>
      </div>
      {/* <p className="bg-pink-100 text-pink-800 font-semibold px-2 py-0.5 rounded w-min">
          Category
        </p> */}
      <h3 className="font-semibold">
        Tips, Tricks, and Techniques on using Cascading Style Sheets.
      </h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
        consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque
        faucibus ex sapien vitae pellentesque.
      </p>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 px-3 py-1 rounded text-white transition duration-300 ease-in-out hover:shadow">
          Read Now
        </button>
        <button>save</button>
      </div>
    </div>
  );
}
