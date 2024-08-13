"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { SearchIcon } from "../icons/searchicon";
import { Spinner } from "@nextui-org/spinner";
import { FolderFillIcon } from "../icons/folder-fill-icon";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import GlobeIcon from "../icons/globe-icon";
import { LockIcon } from "../icons/lock-icon";
import { Image } from "@nextui-org/image";

export default function GridView({
  columns,
  isLoading = false,
  page,
  pages,
  setPage,
  rowCount,
  filteredItems,
  filterValue,
  setFilterValue,
}) {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: columns[0],
    direction: "ascending",
  });

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages, setPage]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage]);

  const onRowsPerPageChange = React.useCallback(
    (e) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [setPage]
  );

  const onSearchChange = React.useCallback(
    (value) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    },
    [setFilterValue, setPage]
  );

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, [setPage, setFilterValue]);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            size="sm"
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total{" "}
            {rowCount?.toLocaleString("en-us") ||
              filteredItems?.length?.toLocaleString("en-us")}{" "}
            rows
          </span>
        </div>
      </div>
    );
  }, [filterValue, onClear, rowCount, filteredItems?.length, onSearchChange]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400"></span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [page, pages, onNextPage, onPreviousPage, setPage]);

  return (
    <>
      {topContent}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 my-6">
          {sortedItems?.length === 0 ?? "No items found"}
          {sortedItems?.map((item) => {
            return (
              <div
                className="flex justify-start items-start flex-col gap-2"
                key={item?.id}
              >
                <Link
                  className="capitalize flex justify-start gap-2 items-center"
                  href={
                    item?.type === "folder"
                      ? `/home/documents/${item?.id}`
                      : `/home/files/view/${item?.id}`
                  }
                  isDisabled={item?.accessibility !== "public"}
                >
                  {item?.type === "folder" ? (
                    <span className="text-secondary">
                      <FolderFillIcon size={30} />
                    </span>
                  ) : (
                    <Image
                      width={80}
                      height={80}
                      alt={
                        item?.Thumbnail?.imagePath ??
                        `${process.env.NEXT_PUBLIC_URL}images/alive.png`
                      }
                      src={
                        item?.Thumbnail?.imagePath ??
                        `${process.env.NEXT_PUBLIC_URL}images/alive.png`
                      }
                    />
                  )}
                </Link>
                <span>{item?.name}</span>
                <Chip
                  className="capitalize text-xs p-3"
                  color={
                    item?.accessibility === "public" ? "success" : "danger"
                  }
                  size="sm"
                  variant="flat"
                >
                  <p className="flex items-center justify-start gap-2 w-12">
                    <span>{item?.accessibility}</span>
                    <span>
                      {item?.accessibility === "public" ? (
                        <GlobeIcon />
                      ) : (
                        <LockIcon />
                      )}
                    </span>
                  </p>
                </Chip>
                <span className="text-stone-400 text-sm">
                  Author: {item?.Account?.fullName ?? ""}
                </span>
              </div>
            );
          })}
        </div>
      )}
      {bottomContent}
    </>
  );
}
