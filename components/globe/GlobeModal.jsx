import { Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import CountryInfo from "./CountryInfo";
import GlobeTable from "./GlobeTable";
import useSWR from "swr";
import React from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GlobeModal = ({ screenshot, isOpen, onClose, countryData }) => {
  const { data, isLoading } = useSWR(
    `/api/v1/globe/stats?query=${countryData?.properties.ADMIN}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );
  
  return (
    <Modal
      scrollBehavior="outside"
      isDismissable={false}
      size="5xl"
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white" 
    >
      <ModalContent
        className="bg-white" 
      >
        {(onClose) => (
          <>
            <ModalBody>
              <div className="space-y-5">
                <CountryInfo
                  countryData={countryData}
                  screenshot={screenshot}
                  data={data}
                />
                <GlobeTable country={countryData?.properties.ADMIN} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GlobeModal;
