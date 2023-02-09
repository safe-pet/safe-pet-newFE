import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import MapScript from "../../src/components/map/MapScript";

export default function KakaoMap() {
  const map = useRef();
  // console.log(Window);
  // const DynamicComponent = dynamic(
  //   import("../../src/components/map/MapScript") as any,
  // );

  // useEffect(() => {
  //   // if (typeof window === "undefined") return;
  //   MapScript();
  //   // typeof window !== "undefined" ? MapScript() : null;
  //   // const container = document.getElementById("map") as HTMLElement;
  //   // const options = {
  //   //   center: new window.kakao.maps.LatLng(37.420125, 127.126665),
  //   //   level: 3,
  //   // };
  //   // const map = new window.kakao.maps.Map(container, options);
  // }, []);

  return (
    <MapBox>
      <div>왜 안보일까</div>
      <Map
        id="myMap"
        // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.452613,
          lng: 126.570888,
        }}
        style={{
          // 지도의 크기
          width: "300px",
          height: "300px",
        }}
        // level={3} // 지도의 확대 레벨
      />
      {/* <DynamicComponent /> */}
      <MapBox>new Component</MapBox>
    </MapBox>
  );
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
`;
