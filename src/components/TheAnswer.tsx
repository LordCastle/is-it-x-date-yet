"use client";

import React from "react";
import { useDateTime } from "@/context/DateTimeContext";

const TheAnswer: React.FC = () => {
  const { isCurrentOrPast } = useDateTime();

  return (
    <div className="w-full">
      <h2 className="text-3xl font-medium tracking-widest mb-4 text-center uppercase text-[var(--foreground)]">
        {isCurrentOrPast ? "Yup" : "Nope"}
      </h2>
    </div>
  );
};

export default TheAnswer;
