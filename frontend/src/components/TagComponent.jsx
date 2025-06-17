/* eslint-disable */
import React, { useState, useRef } from "react";

export default function TagComponent({ tags, setTags, usage }) {
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null); // Ref for file input

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      if (!tags.includes(fileName)) {
        setTags([...tags, fileName]);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-row items-center rounded-lg relative">
      {usage === "text" ? (
        <input
          className="px-3 h-full w-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg outline-none pr-44"
          placeholder="Category"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <input
          className="px-3 h-full w-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg outline-none pr-[60%]"
          placeholder="img url"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}

      <div
        className={`absolute right-2 top-1/2 -translate-y-1/2 ${
          usage === "text" ? "h-[80%]" : "h-[65%]"
        } max-w-[60%] md:max-w-[40%] overflow-x-auto flex items-center gap-2 bg-secondary px-2 py-1 rounded-lg`}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-95p md:h-70p whitespace-nowrap bg-primary text-black text-sm px-2 py-3 rounded-full flex flex-row items-center justify-between"
          >
            <div className="flex items-center justify-center h-full px-1">
              {usage === "text" ? tag : index + 1}
            </div>
            <div
              className="rounded-full flex justify-center items-center h-full cursor-pointer"
              onClick={() => removeTag(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
