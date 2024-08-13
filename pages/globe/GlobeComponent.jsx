"use client";
import dynamic from "next/dynamic";
const MyGlobe = dynamic(() => import("../../components/globe/MyGlobe"), {
  ssr: false,
});
import useSWR from "swr";
import { useMemo } from "react";
import CardSkeleton from "../../components/ui/CardSkeleton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GlobeComponent = () => {
  const { data: menuItems, isLoading: menuLoading } = useSWR(
    `/api/v1/menu-items`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const aliveMenuItems = useMemo(() => {
    let resources = [...(menuItems?.rows || [])];
    resources = resources?.filter((item) => item?.isEnabled === true);
    return resources;
  }, [menuItems?.rows]);

  return (
    <>
      {menuLoading ? (
        <div className="m-5">
          <CardSkeleton />
        </div>
      ) : (
        <>
          <MyGlobe />
        </>
      )}
    </>
  );
};

export default GlobeComponent;
