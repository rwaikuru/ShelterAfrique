"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/input";

const useMonthSelect = () => {
  const [activeDate, setActiveDate] = useState("");

  return {
    activeDate,
    render: (
      <div className="flex justify-end items-center mb-5">
        <Input
          className="max-w-xs"
          type="date"
          defaultValue={activeDate}
          onChange={(e) => setActiveDate(e.target.value)}
        />
      </div>
    ),
  };
};

export default useMonthSelect;
