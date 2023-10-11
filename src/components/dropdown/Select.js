import { useDropdown } from "./dropdown-context";

const Select = ({ placeholder = "" }) => {
  const { show, toggle } = useDropdown();
  return (
    <div
      className="flex items-center justify-between mb-1  rounded cursor-pointer font-medium"
      onClick={toggle}
    >
      <span className="inline-block text-[20px] font-medium text-gray9">
        {placeholder}
      </span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
