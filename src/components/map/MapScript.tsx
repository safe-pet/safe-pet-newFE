// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

// console.log(Window);

export default function MapScript() {
  // if (typeof window !== "undefined") {
  const { kakao } = window;
  if (kakao !== undefined) {
    console.dir(kakao.maps);
    // kakao.maps.load(() => {
    //   const container = document.getElementById("myMap") as HTMLElement;
    //   const options = {
    //     center: new kakao.maps.LatLng(33.450701, 126.570667),
    //     level: 3,
    //   };
    //   const map = new kakao.maps.Map(container, options);
    // });
  }
  // }
}
