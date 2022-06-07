import React from "react";
import { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";
import { ClipboardIcon } from "@heroicons/react/solid";

export default function CopyToClipboardBtn({
  children,
  text,
  //   onSuccess,
  //   onError,
  className,
}) {
  const ref = useRef();

  const onSuccess = () => {
    // notify("copied");
  };

  const onError = () => {
    // notify("error");
  };

  useEffect(() => {
    if (ref) {
      const clipboard = new ClipboardJS(ref.current, {
        text: () => text,
      });

      clipboard.on("success", (e) => onSuccess?.(e));
      clipboard.on("error", (e) => onError?.(e));

      return () => {
        try {
          clipboard.destroy();
        } catch (e) {}
      };
    }
  }, [ref.current]);

  return (
    <div className="relative">
      <span
        ref={ref}
        className={
          className || "btn btn-sm btn-square glass absolute top-1 right-0"
        }
      >
        <ClipboardIcon className="w-4 h-4 text-white" />
      </span>
      {children}
    </div>
  );
}
