import Properties from "./Properties";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faMaximize, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@nextui-org/skeleton";

const CountryInfo = ({ screenshot, countryData, data = [] }) => {
  // Safely access properties, defaulting to 0 if data is empty or undefined
  const partnerCount = data.length > 0 ? data[0]?.partnerCount ?? 0 : 0;
  const userCount = data.length > 0 ? data[0]?.userCount ?? 0 : 0;

  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className={`w-full h-96 overflow-hidden rounded-lg bg-cover bg-center lg:basis-2/6 lg:w-auto lg:h-auto`}
        style={{
          backgroundImage: `url('${screenshot}')`,
        }}
      >
        <Skeleton
          isLoaded={!!screenshot}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="lg:basis-4/6 space-y-5 p-0 lg:p-4 pt-0">
        <div className="flex-col space-y-3 lg:flex-row p-3 rounded-md">
          <div className="lg:basis-1/2">
            <h3 className="font-bold text-xl lg:text-2xl font-serif">
              {countryData?.properties.ADMIN}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
          <Properties
            heading="Country"
            icon={faFlag}
            value={countryData?.properties.ADMIN}
          />
          <Properties
            heading="Partners"
            icon={faUsers}
            value={partnerCount}
          />
          <Properties
            heading="Users"
            icon={faMaximize}
            value={userCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
