import { useNavigate, useLocation } from "react-router";

export default function FeedNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <nav>
        <ul className="flex flex-col gap-2">
          <li
            className={
              "flex justify-between p-2 rounded items-center transition duration-300 ease-in-out " +
              (location.pathname === "/"
                ? "bg-blue-50 text-blue-900 shadow-sm"
                : "")
            }
            onClick={() => navigate("/")}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="#" alt="h" />
              <p>All Items</p>
            </div>
            <p
              className={
                "text-sm " +
                (location.pathname === "/" ? "text-blue-900" : "text-gray-500")
              }
            >
              47
            </p>
          </li>

          <li
            className={
              "flex justify-between p-2 rounded items-center transition duration-300 ease-in-out " +
              (location.pathname === "/saved"
                ? "bg-blue-50 text-blue-900 shadow-sm"
                : "")
            }
            onClick={() => navigate("/saved")}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="#" alt="h" />
              <p>Saved</p>
            </div>
            <p
              className={
                "text-sm " +
                (location.pathname === "/saved"
                  ? "text-blue-900"
                  : "text-gray-500")
              }
            >
              12
            </p>
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
