"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface DateTimeContextType {
  selectedDateTime: string;
  setSelectedDateTime: (dateTime: string) => void;
  isCurrentOrPast: boolean;
}

const DateTimeContext = createContext<DateTimeContextType | undefined>(
  undefined
);

// Function to get current datetime in the format required by datetime-local input
const getCurrentDateTime = () => {
  const now = new Date();
  // Format: YYYY-MM-DDThh:mm
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export function DateTimeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedDateTime, setSelectedDateTime] = useState<string>(() => {
    // Get the datetime from URL query parameter or use current datetime
    return searchParams.get("datetime") || getCurrentDateTime();
  });
  const [isCurrentOrPast, setIsCurrentOrPast] = useState<boolean>(false);

  // Update URL when selectedDateTime changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("datetime", selectedDateTime);
    router.replace(`?${params.toString()}`);
  }, [selectedDateTime, router, searchParams]);

  useEffect(() => {
    const checkDateTime = () => {
      const selected = new Date(selectedDateTime);
      const now = new Date();
      setIsCurrentOrPast(selected <= now);
    };

    checkDateTime();
    // Update every second
    const interval = setInterval(checkDateTime, 1000);

    return () => clearInterval(interval);
  }, [selectedDateTime]);

  return (
    <DateTimeContext.Provider
      value={{ selectedDateTime, setSelectedDateTime, isCurrentOrPast }}
    >
      {children}
    </DateTimeContext.Provider>
  );
}

export function useDateTime() {
  const context = useContext(DateTimeContext);
  if (context === undefined) {
    throw new Error("useDateTime must be used within a DateTimeProvider");
  }
  return context;
}
