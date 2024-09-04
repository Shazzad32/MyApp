import React from "react";

const TopSubDiv = (props) => {
  return (
    <div>
      <div
        style={{
          height: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          lineHeight: 2,
        }}
      >
        <p
          style={{
            flex: 5,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          {props.name}
        </p>
        <div
          style={{
            flex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            fontSize: 14,
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        >
          <h2>{props.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopSubDiv;
