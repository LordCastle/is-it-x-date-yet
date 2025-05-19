"use client";

import React from "react";
import { useDateTime } from "@/context/DateTimeContext";

const TheQuestion: React.FC = () => {
  const { selectedDateTime, setSelectedDateTime } = useDateTime();

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateTime(e.target.value);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-3xl font-bold mb-4 flex flex-col gap-2 sm:flex-row items-center justify-center">
        <span>Is it</span>
        <input
          type="datetime-local"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          className="p-2 border rounded-md text-base sm:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)]"
        />
        <span>yet?</span>
      </h2>
    </div>
  );
};

export default TheQuestion;
