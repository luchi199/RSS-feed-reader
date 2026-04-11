export default function FeedItem() {
    return (
        // "title": "CSS-Tricks",
        //   "feedUrl": "https://css-tricks.com/feed/",
        //   "siteUrl": "https://css-tricks.com/",
        //   "description": "Tips, Tricks, and Techniques on using Cascading Style Sheets.",
        //   "format": "rss2"
        <div className="flex flex-col gap-1 border-b-1 border-gray-100 px-6 py-3">
            <div className="flex align-center gap-2">
                <p className="bg-pink-800 text-white text-center font-semibold rounded w-6 h-6">C</p>
                <p className="text-gray-500 text-sm">CSS-Tricks &#xb7; 2h ago</p>
            </div>
            <h3 className="font-semibold">Tips, Tricks, and Techniques on using Cascading Style Sheets.</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
            <p className="bg-pink-100 text-pink-800 font-semibold px-2 py-0.5 rounded w-min">Category</p>
        </div>
    );

}