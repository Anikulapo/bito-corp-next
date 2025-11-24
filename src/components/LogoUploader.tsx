"use client";

import Image from "next/image";

export default function LogoUploader({
  handleDrop,
  handleDragOver,
  image,
  inputRef,
  handleFileChange,
}: {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  image: string | null;
  inputRef: React.RefObject<HTMLInputElement>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="w-64 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer relative"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => inputRef.current?.click()}
    >
      {image ? (
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt="Uploaded Logo"
            fill
            className="object-contain"
            sizes="256px"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-500">
          <p className="text-sm">Drag your Logo here,</p>
          <p className="text-sm">
            or{" "}
            <span className="text-indigo-600 cursor-pointer">
              select a file
            </span>
          </p>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}
