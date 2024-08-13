// "use client";
// import NextUITable from "../tables/NextUITable";
// import React from "react";
// import { Card, CardBody } from "@nextui-org/card";
// import useSWR from "swr";
// import { columns, userRender } from "./userColumns";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const GlobeTable = ({ country }) => {
//   const [page, setPage] = React.useState(1);
//   const [filterValue, setFilterValue] = React.useState("");
//   const { data, isLoading } = useSWR(
//     `/api/v1/globe?page=${page}&query=${country}`,
//     fetcher,
//     {
//       keepPreviousData: true,
//     }
//   );

//   const hasSearchFilter = Boolean(filterValue);
//   const filteredItems = React.useMemo(() => {
//     let filteredRows = [...(data?.rows || [])];

//     return filteredRows;
//   }, [data?.rows]);

//   const pages = React.useMemo(() => {
//     return data?.count ? Math.ceil(data.count / 10) : 0;
//   }, [data?.count]);

//   const rowCount = React.useMemo(() => {
//     return data?.count ? data?.count : 0;
//   }, [data?.count]);

//   return (
//     <Card className="mb-5 mx-5">
//       <CardBody>
//         <div className="flex justify-between gap-6 items-center mt-3 mb-5">
//           <h4 className="mb-5">Partners</h4>
//           <h1>sjnfdllfk</h1>
//         </div>

//         <NextUITable
//           columns={columns}
//           renderCell={userRender}
//           isLoading={isLoading}
//           page={page}
//           pages={pages}
//           rowCount={rowCount}
//           setPage={setPage}
//           filteredItems={filteredItems}
//           hasSearchFilter={hasSearchFilter}
//           filterValue={filterValue}
//           setFilterValue={setFilterValue}
//         />
//       </CardBody>
//     </Card>
//   );
// };

// export default GlobeTable;
