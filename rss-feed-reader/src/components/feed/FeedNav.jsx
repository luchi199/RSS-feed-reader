export default function FeedNav() {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="#" alt="h" />
              <p>All Items</p>
            </div>
            <p className="text-gray-500 text-sm">47</p>
          </li>

          <li className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="#" alt="h" />
              <p>Saved</p>
            </div>
            <p className="text-gray-500 text-sm">12</p>
          </li>
        </ul>
      </nav>
      <hr className="border-gray-200" />
      <section>
        <h4 className="text-gray-400 font-medium text-sm">CATEGORIES</h4>
        <div>Categories go here</div>
      </section>
    </div>
  );
}
