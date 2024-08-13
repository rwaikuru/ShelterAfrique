"use client";
import { getVal } from "../../lib/utilsfolder/utils";
import { countriesData } from "../../lib/utilsfolder/countries";
import { useColorScale } from "../../hooks/useColorScale";
import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import GlobeModal from "./GlobeModal";
import { useDisclosure } from "@nextui-org/react";
import useScreenshot from "../../hooks/useScreenshot";

const MyGlobe = () => {
  const [countryData, setCountryData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoverD, setHoverD] = useState();
  const globeEl = useRef();

  const { screenshot, takeScreenshot, setScreenshot, captureRef } = useScreenshot();
  const colorScale = useColorScale();

  useEffect(() => {
    globeEl.current.controls().autoRotate = false;
  }, []);

  const handlePolygonClick = (polygon) => {
    console.log("Polygon clicked:", polygon);

    const featurePolygon = polygon;
    globeEl.current.controls().autoRotate = false;
    setCountryData(featurePolygon);
    onOpen();
    
    setTimeout(() => {
      takeScreenshot();
    }, 700); 
  };

  const onCloseModal = () => {
    globeEl.current.controls().autoRotate = false;
    setCountryData(undefined);
    setScreenshot(null);
    setHoverD(null);
    onClose();
  };

  return (
    <div ref={captureRef} className="!w-4/5">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countriesData.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)} 
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d))
        } 
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        onPolygonClick={handlePolygonClick}
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={300}
      />
      <GlobeModal
        countryData={countryData}
        isOpen={isOpen}
        onClose={onCloseModal}
        screenshot={screenshot}
      />
    </div>
  );
};

export default MyGlobe;
