"use client";

import React, { useState, useEffect } from "react";
import { useDateTime } from "@/context/DateTimeContext";

const positiveAnswers = ["Yes", "Yup", "Indeed", "You know it", "I believe so"];

const negativeAnswers = ["No", "Nope", "You Wish", "Not Yet", "Negatory"];

const TheAnswer: React.FC = () => {
  const { isCurrentOrPast } = useDateTime();
  const [answer, setAnswer] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const getRandomAnswer = (answers: string[]) => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  useEffect(() => {
    // Start fade out
    setIsVisible(false);

    // Wait for fade out, then update answer and fade in
    const timeout = setTimeout(() => {
      setAnswer(
        getRandomAnswer(isCurrentOrPast ? positiveAnswers : negativeAnswers)
      );
      setIsVisible(true);
    }, 300); // Half of our transition time

    return () => clearTimeout(timeout);
  }, [isCurrentOrPast]);

  return (
    <section className="the-answer w-full flex items-center justify-center gap-16">
      <h2
        className={`text-3xl font-medium tracking-widest mb-4 text-center uppercase text-[var(--foreground)]
          transition-opacity duration-600 h-[2rem] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {answer}
      </h2>
    </section>
  );
};

export default TheAnswer;
