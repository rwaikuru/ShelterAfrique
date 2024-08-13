import React from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import useSWR from 'swr';
import { Accordion, AccordionItem } from '@nextui-org/react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GlobeModal = ({ isOpen, onClose, countryData }) => {
  const { data: projectDetails, isLoading, error } = useSWR(
    countryData ? `/wp-json/wp/v2/project-details?country=${countryData.properties.ADMIN}` : null,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  if (error) {
    console.error("Error fetching project details:", error);
    return <div>An error occurred while loading projects: {error.message}</div>;
  }

    const projects = projectDetails?.map((detail) => ({
      id: detail.id,
      title: detail.title.rendered,
      funding: detail.acf?.funding,
      status: detail.acf?.project_status,
      // Add other desired project properties here
  
  }));

  return (
    <Modal
      scrollBehavior="outside"
      isDismissable={false}
      size="5xl"
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white"
    >
      <ModalContent className="bg-white">
        <ModalBody>
          <div className="space-y-5">
            {/* Country Name and View Profile Link */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{countryData?.properties.ADMIN}</h2>
              <a href="#" className="text-blue-600 underline">
                View Country Profile
              </a>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {isLoading ? (
                <p>Loading projects...</p>
              ) : (
                projects?.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="p-4 cursor-pointer">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p>Funding: {project.funding}</p>
                      <p>Status: {project.status}</p>
                    </div>
                    <Accordion
                      motionProps={{
                        variants: {
                          enter: {
                            y: 0,
                            opacity: 1,
                            height: 'auto',
                            transition: {
                              height: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                              },
                              opacity: {
                                easings: 'ease',
                                duration: 1,
                              },
                            },
                          },
                          exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: {
                                easings: 'ease',
                                duration: 0.25,
                              },
                              opacity: {
                                easings: 'ease',
                                duration: 0.3,
                              },
                            },
                          },
                        },
                      }}
                    >
                      <AccordionItem
                        key={index}
                        aria-label={`Details for ${project.title}`}
                        title="Details"
                        className="p-4 bg-gray-50"
                      >
                        {/* More project details */}
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GlobeModal;
