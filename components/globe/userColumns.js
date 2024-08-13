import { Avatar } from "@nextui-org/avatar";
import UserActions from "./userActions";
import { Chip } from "@nextui-org/chip";
import { MailIcon } from "../icons/mail-icon";

const columns = [
  { name: "Organization", uid: "organization" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

export const userRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "status":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={cellValue === "active" ? "success" : "danger"}
          size="sm"
          variant="flat"
        >
          {cellValue}
        </Chip>
      );
      return (
        <>
          {cellValue === "google" ? (
            <Avatar
              showFallback
              name="Google"
              src="/images/google.png"
              size="sm"
              isBordered
            />
          ) : cellValue === "linkedin" ? (
            <Avatar
              showFallback
              name="Linked In"
              src="/images/linkedin.png"
              size="sm"
              isBordered
            />
          ) : (
            <Avatar
              showFallback
              isBordered
              size="sm"
              fallback={<MailIcon width="2em" height="2em" />}
            />
          )}
        </>
      );
    case "organization":
      return row?.userInfo?.organization;
    case "actions":
      return <UserActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
