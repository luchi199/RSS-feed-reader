export default function CategoryList() {
  return (
    <dl className="pb-2">
      <dt className="pb-2">
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-pink-800 rounded-full" />
          <p>Design</p>
        </div>
      </dt>
      <dd>
        <ul className=" flex flex-col gap-2 pl-3">
          <li className="flex justify-between w-full">
            <div className="flex align-center gap-2">
              <p className="bg-yellow-800 text-white text-center text-sm font-semibold rounded w-5 h-5">
                C
              </p>
              <p className="text-gray-500 text-sm">CSS-Tricks</p>
            </div>
            <p className="text-sm text-gray-500">47</p>
          </li>
          <li className="flex justify-between w-full">
            <div className="flex align-center gap-2">
              <p className="bg-yellow-800 text-white text-center text-sm font-semibold rounded w-5 h-5">
                C
              </p>
              <p className="text-gray-500 text-sm">CSS-Tricks</p>
            </div>
            <p className="text-sm text-gray-500">47</p>
          </li>
          <li className="flex justify-between w-full">
            <div className="flex align-center gap-2">
              <p className="bg-yellow-800 text-white text-center text-sm font-semibold rounded w-5 h-5">
                C
              </p>
              <p className="text-gray-500 text-sm">CSS-Tricks</p>
            </div>
            <p className="text-sm text-gray-500">47</p>
          </li>
        </ul>
      </dd>
    </dl>
  );
}
