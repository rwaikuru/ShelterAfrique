"use client";
import React, { useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useState } from "react";
import { allCountryList } from "./countryList";
const useCountrySelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const countries = allCountryList;
  const country = searchParams.get("country") || "All";
  const [activeCountry, setActiveCountry] = useState(country);
  useEffect(() => {
    setActiveCountry(country);
  }, [country]);
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return {
    activeCountry,
    render: (
      <div className="flex justify-end items-center mb-5">
        <Select
          label="Select country"
          placeholder="Select a country"
          defaultSelectedKeys={[country]}
          className="max-w-xs"
          disallowEmptySelection
          onChange={(e) => {
            const newCountry = e.target.value;
            setActiveCountry(newCountry);
            router.push(
              pathname + "?" + createQueryString("country", e.target.value)
            );
          }}
        >
          {countries?.map((country) => (
            <SelectItem key={country.name} value={country.name}>
              {country.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    ),
  };
};

export default useCountrySelect;
