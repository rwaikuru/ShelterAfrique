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

  // Log the projectDetails to inspect the structure
  console.log('Project Details:', projectDetails);

  // Ensure projectDetails is an array before proceeding
  if (!Array.isArray(projectDetails)) {
    console.warn('Expected projectDetails to be an array, but received:', projectDetails);
    return <div>Failed to load projects.</div>;
  }

  const projects = projectDetails.filter(
    (detail) => detail.acf?.country?.toLowerCase() === countryData?.properties.ADMIN?.toLowerCase()
  );

  console.log('Filtered Projects:', projects);

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
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{countryData?.properties.ADMIN}</h2>
              <a href="#" className="text-blue-600 underline">
                View Country Profile
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {isLoading ? (
                <p>Loading projects...</p>
              ) : (
                projects.length > 0 ? (
                  projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-4 cursor-pointer">
                        <h3 className="text-lg font-semibold">{project.title.rendered}</h3>
                        <p>Funding: {project.acf.funding}</p>
                        <p>Status: {project.acf.project_status}</p>
                      </div>
                      <Accordion>
                        <AccordionItem
                          key={project.id}
                          aria-label={`Details for ${project.title.rendered}`}
                          title="Details"
                          className="p-4 bg-gray-50"
                        >
                          {/* More project details */}
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))
                ) : (
                  <p>No projects found for {countryData?.properties.ADMIN}</p>
                )
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
