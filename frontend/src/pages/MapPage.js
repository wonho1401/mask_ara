import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { GetMarkerDetail, GetMarkerList } from "../api/mapApi";
import { PrimaryColor } from "../utils/style";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapCloseButton = styled.button`
  position: absolute;
  top: 550px;
  left: 50px;
  background-color: #ffffff;
  color: #4dad6c;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  z-index: 999;
`;

const QrScanButton = styled.button`
  position: absolute;
  top: 550px;
  right: 50px;
  background-color: #4dad6c;
  color: #ffffff;
  width: 120px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  z-index: 999;
`;

// const DetailContainer = styled.div`
//   border-radius: 5px;
// `;

const MarkerDetailContainer = styled.div`
  /* background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png")
    no-repeat; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 200px;
  height: 100px;
  font-weight: 900;
  font-family: roboto-mono;
  overflow: auto;
  outline: 0;
  /* margin: -10px 0px -10px -10px; */
  /* padding: 20px 10px; */
`;

const DetailTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

const DetailTopLeft = styled.div`
  display: flex;
  font-size: 18px;
`;

const DetailTopRight = styled.button`
  border: none;
  color: ${PrimaryColor};
  text-align: center;
  width: 20px;
  /* line-height: 2.5rem; */
  border-radius: 5px;
`;

const DetailBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailBottomLeft = styled.img`
  width: 100px;
  height: 75px;
  resize: both;
  background-size: 100px 75px;
  margin-bottom: 50px;
`;

const DetailBottomRight = styled.div`
  display: flex;
  width: 100px;
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
`;

function MapPage() {
  const [myLocation, setMyLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation??? ???????????? ?????? ????????? ???????????????
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // ??????
              lng: position.coords.longitude, // ??????
            },
            isLoading: false,
          }));
        },
        (err) => {
          setMyLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setMyLocation((prev) => ({
        ...prev,
        errMsg: "geolocation??? ????????? ??? ????????????.",
        isLoading: false,
      }));
    }
    // getMarker ?????? ???????????????.
    let data = {
      "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
    };

    GetMarkerList(data).then((res) => {
      console.log(res.data);
      setMarkers(res.data);
    });
  }, []);

  // console.log(myLocation); // ?????? ??? ?????? ??????, ?????? ??????

  const MarkerDetail = ({ id }) => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
      let data = {
        "X-AUTH-TOKEN": window.localStorage.getItem("X-AUTH-TOKEN"),
      };
      GetMarkerDetail(data, id).then((res) => {
        console.log(res);
        setName(res.data.name);
        setAddress(res.data.address);
        setImgUrl(res.data.imgUrl);
      });
    }, []);

    return (
      // <DetailContainer>
      <MarkerDetailContainer>
        <DetailTopContainer>
          <DetailTopLeft>{name}</DetailTopLeft>
        </DetailTopContainer>
        <DetailBottomContainer>
          <DetailBottomLeft src={imgUrl}></DetailBottomLeft>
          <DetailBottomRight>{address}</DetailBottomRight>
        </DetailBottomContainer>
      </MarkerDetailContainer>
      // </DetailContainer>
    );
  };

  for (let i = 0; i < markers.length; i++) {
    markers[i].content = <MarkerDetail id={markers[i].id} />;
  }
  console.log(markers);

  const EventMarkerContainer = ({ position, content }) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <MapMarker position={position} onClick={() => setIsOpen(!isOpen)}>
        {isOpen && content}
      </MapMarker>
    );
  };

  const mapCloseHandler = () => {
    navigate("/");
  };
  const qrHandler = () => {
    navigate("/qr");
  };

  return (
    <div>
      <MapContainer>
        <Map
          center={myLocation.center}
          style={{
            // ????????? ??????
            width: "100%",
            height: "650px",
          }}
          level={4} // ????????? ?????? ??????
          draggable={true}
        >
          {/* map ?????? ?????? ????????? ???????????? */}

          {markers.map((marker) => (
            <EventMarkerContainer
              key={marker.id}
              position={{
                lat: `${marker.latitude}`,
                lng: `${marker.longitude}`,
              }} // ????????? ????????? ??????
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // ?????????????????? ???????????????
                size: {
                  width: 24,
                  height: 35,
                }, // ?????????????????? ???????????????
              }}
              title={marker.name} // ????????? ?????????, ????????? ???????????? ????????? ???????????? ???????????????
              content={marker.content}
            />
          ))}
          {/* ????????? ?????? ????????? ???????????? ?????? level??? ????????? ?????? ????????? ????????? ????????? ??? ????????? response ???????????? */}
          {/* {!myLocation.isLoading && <MapMarker position={myLocation.center} />} */}
        </Map>

        <MapCloseButton onClick={mapCloseHandler}>?????? ??????</MapCloseButton>
        <QrScanButton onClick={qrHandler}>
          <FontAwesomeIcon icon={faQrcode} style={{ paddingRight: "10px" }} />
          ?????? ??????
        </QrScanButton>
      </MapContainer>
    </div>
  );
}

export default MapPage;
