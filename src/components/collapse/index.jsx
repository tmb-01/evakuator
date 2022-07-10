import React, { useEffect, useRef, useState } from "react";
import { CollapseDescription, CollapseTitle, CollapseWrapper } from "./styles";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

function Collapse({ title, description }) {
  const [active, setActive] = useState(false);

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <CollapseWrapper>
      <CollapseTitle active={active} onClick={() => setActive(!active)}>
        <p>
          {title}
          <b>{/* {JSON.stringify(ref?.current)} */}</b>
        </p>
        <div className={`toggle-icon`}>
          <ArrowDown />
        </div>
      </CollapseTitle>
      <CollapseDescription
        height={
          document.querySelector(`#${title.split(" ").join("_")}`)?.clientHeight
        }
        active={active}
      >
        <div id={title?.split(" ")?.join("_")} className="text">
          {description}
        </div>
      </CollapseDescription>
    </CollapseWrapper>
  );
}

export default Collapse;
