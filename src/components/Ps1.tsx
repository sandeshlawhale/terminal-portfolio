import React from "react";
import config from "../../config.json";

const Ps1 = () => {
  return (
    <p className="text-gray">
      <span className="text-blue">{config.Ps1_hostname}</span>@
      <span className="text-green">{config.Ps1_username}</span>:$ ~{" "}
    </p>
  );
};

export default Ps1;
