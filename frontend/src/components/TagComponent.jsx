/* eslint-disable */
import React, { useState, useRef } from 'react';

export default function TagComponent({ tags, setTags, usage }) {
  const [input, setInput] = useState('');
  const fileInputRef = useRef(null); // Ref for file input

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput('');
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
      {usage === 'text' ? (
        <input
          className="px-3 h-full w-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg outline-none pr-44"
          placeholder="Category"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => fileInputRef.current.click()}
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          {(tags.length === 0) && <div className="ml-2 text-xs md:text-base">Upload Pics</div>}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
        </>
      )}

      <div className={`absolute right-2 top-1/2 -translate-y-1/2 h-[80%] max-w-[60%] md:${usage === "text"?"max-w-[40%]":"max-w-[60%]"} overflow-x-auto flex items-center gap-2 bg-secondary px-2 py-1 rounded-lg`}>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-95p md:h-70p whitespace-nowrap bg-primary text-black text-sm px-2 py-3 rounded-full flex flex-row items-center justify-between gap-1"
          >
            <div className="flex items-center justify-center h-full px-1">{tag}</div>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
