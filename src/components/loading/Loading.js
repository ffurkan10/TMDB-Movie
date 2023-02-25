import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="loading"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#22254b",
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#01B4E4"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
