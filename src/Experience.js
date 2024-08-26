import Blobs from "./components/Blob/Blobs";
import { OrbitControls, Text, Html, Bounds } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI * 0.45}
        maxPolarAngle={Math.PI * 0.55}
        minAzimuthAngle={-Math.PI * 0.05}
        maxAzimuthAngle={Math.PI * 0.05}
      />
      {/* <Text color="black" textAlign="left">Mina Fletcher</Text>
    <Text scale = { 0.5 } color="black" textAlign="left" position-y = { -1 }>Designer. Developer. Creator.</Text> */}
      {/* <mesh>
        <Html fullscreen className="LANDING-TITLE text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase mobile:pr-24 tablet:pr-0">Mina Fletcher</Html>
        <Html fullscreen className="LANDING-SUBTITLE text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">Designer. Developer. Creator.</Html>
        <Html fullscreen className="LANDING-BODY text-black mobile:mobile-body tablet:body max-w-2xl laptop:body mt-4">As a front-end developer based in New York, I aspire to create interactive visual experiences and to further explore the world of creative coding. I’m currently looking for freelance or full-time roles in software engineering, animation, and computer graphics. </Html>
        </mesh> */}

      <Blobs />
    </>
  );
}
