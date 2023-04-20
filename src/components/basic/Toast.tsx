import { useState, useEffect } from "react";
import classNames from "classnames";

function Toast({ message, type, onClose }: any) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);

    if (onClose) {
      onClose();
    }
  };

  const typeClass = classNames({
    "bg-green-500": type === "success",
    "bg-red-500": type === "error",
    "bg-yellow-500": type === "warning",
  });

  return (
    <div
      className={classNames(
        "fixed left-4 top-4 px-4 py-2 text-xs rounded-md text-white shadow-lg transition-all duration-300",
        typeClass,
        {
          "opacity-100": show,
          "opacity-0": !show,
        }
      )}
    >
      <div>{message}</div>
      <button
        className="absolute top-2 right-2 text-white hover:text-gray-200 focus:outline-none"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
