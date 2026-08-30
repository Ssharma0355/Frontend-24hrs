import React, { useState } from "react";
import json from "./data.json";
// recurive logic
const List = ({ list }) => {
  const [expand, setExpand] = useState({});
  return (
    <div style={{ paddingLeft: "12px", borderLeft: "1px solid black" }}>
      {list.map((node) => (
        <div style={{ padding: "12px", margin: "12px" }} key={node.id}>
          <p
            onClick={() => {
              setExpand((prev) => ({ ...prev, [node.name]: !prev[node.name] }));
            }}
            style={{ cursor: "pointer" }}
          >
            {expand?.[node.name] && node.isFolder ? "-" : "+"}
            {node.name}
          </p>
          {expand?.[node.name] && (
            <p>{node?.children && <List list={node.children} />}</p>
          )}
        </div>
      ))}
    </div>
  );
};
// expand and collape for folder

function MainExplore() {
  const [data, setData] = useState(json);

  return (
    <div>
      <List list={data} />
    </div>
  );
}

export default MainExplore;
