import React, { useRef, useState, useEffect } from "react";

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const DropDownFilter: React.FC<Props> = ({
  label,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (isOpen) {
      close(buttonRef.current);
    } else {
      buttonRef.current?.focus();
      setIsOpen(true);
    }
  };
  const close = (focusAfter?: HTMLElement | null) => {
    if (!isOpen) return;
    setIsOpen(false);
    focusAfter && focusAfter.focus();
  };
  useEffect(() => {
    const handleFocusIn = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(buttonRef.current);
      }
    };

    window.addEventListener("click", handleFocusIn);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("click", handleFocusIn);
      window.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={panelRef}>
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-button"
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown-button"
          className="absolute left-0 z-10 mt-2 w-[32rem] rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
        >
          {children}
        </div>
      )}
    </div>
  );
};
