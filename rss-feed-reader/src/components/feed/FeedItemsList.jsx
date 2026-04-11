import FeedItem from "./FeedItem";

export default function FeedItemsList() {
  return (
    <div className="w-full h-full ">
      <div className="flex items-center w-full h-2/30 border-b-1 border-gray-200 px-4 py-2">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">All Items</h2>
          <p className="text-gray-400 text-xs">47 unread</p>
        </div>
      </div>

      <div className="h-98/105 overflow-y-scroll">
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
        <FeedItem></FeedItem>
      </div>
    </div>
  );
}
