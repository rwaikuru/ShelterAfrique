"use client";
import { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import GlobeModal from "./GlobeModal";
import { useDisclosure } from "@nextui-org/react";
import useScreenshot from "../../hooks/useScreenshot";
import { clickableCountries } from "../../lib/utilsfolder/countryList";
import { useColorScale } from "../../hooks/useColorScale";
import { getVal } from "../../lib/utils";
import { countriesData } from "../../lib/utilsfolder/countries";

const MyGlobe = () => {
  const [countryData, setCountryData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoverD, setHoverD] = useState();
  const globeEl = useRef();
  const [manualInteraction, setManualInteraction] = useState(false);

  const { screenshot, takeScreenshot, setScreenshot, captureRef } =
    useScreenshot();
  const colorScale = useColorScale();

  // Coordinates for the center of Africa (approx.)
  const africaCoords = { lat: 1.5, lng: 17.3 };

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableDamping = true;
      controls.dampingFactor = 0.1; // Adjust for desired smoothness

      // Focus on Africa on initial load
      controls.target.set(0, 0, 0); // Center of the globe
      controls.saveState();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;

      // Event listener for manual interaction
      controls.addEventListener("start", () => {
        setManualInteraction(true);
        controls.autoRotate = false;
      });

      // Event listener to focus on Africa when rotation stops
      controls.addEventListener("end", () => {
        if (manualInteraction) {
          controls.rotateTo(africaCoords.lng, africaCoords.lat, 1000);
          setManualInteraction(false); 
        }
      });
    }
  }, []);

  const handlePolygonClick = (polygon) => {
    const featurePolygon = polygon;
    const isClickable = clickableCountries.some(
      (country) => country.code === featurePolygon.properties.ISO_A2
    );

    if (isClickable) {
      controls.autoRotate = false;
      setCountryData(featurePolygon);
      onOpen();
      takeScreenshot();
    }
  };

  const getPolygonColor = (d) => {
    const isClickable = clickableCountries.some(
      (country) => country.code === d.properties.ISO_A2
    );
    if (isClickable) {
      return "rgba(255, 165, 0, 0.8)";
    }
    return d === hoverD ? "steelblue" : colorScale(getVal(d));
  };

  return (
    <div ref={captureRef} className="!w-4/5">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        lineHoverPrecision={0}
        polygonsData={countriesData.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={getPolygonColor}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        onPolygonClick={handlePolygonClick}
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={300}
      />
      <GlobeModal
        countryData={countryData}
        isOpen={isOpen}
        onClose={() => {
          controls.autoRotate = false;
          setCountryData(undefined);
          setScreenshot(null);
          setHoverD(null);
          onClose();
        }}
        screenshot={screenshot}
      />
    </div>
  );
};

export default MyGlobe;
