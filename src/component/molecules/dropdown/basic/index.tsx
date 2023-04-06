import React, { useRef, useState, useEffect } from "react";

type Props = {
  label: React.ReactNode;
  children: React.ReactNode;
  childrenPosition?: "left" | "right";
  className?: string;
};

export const DropDownBasic: React.FC<Props> = ({
  label,
  children,
  className = "",
  childrenPosition = "left",
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
      </button>
      {isOpen && (
        <div
          id="dropdown-button"
          className={`absolute z-10 mt-2 w-48 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg ${
            childrenPosition === "left" ? "left-0" : "right-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
