"use client";
import { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);

  const data = [
    {
      dec: "Commodo sunt laboris ipsum nisi ullamco ullamco et mollit fugiat voluptate laborum labore pariatur.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      dec: "Commodo sunt laboris ipsum nisi ullamco ullamco et mollit fugiat voluptate laborum labore pariatur.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      dec: "Commodo sunt laboris ipsum nisi ullamco ullamco et mollit fugiat voluptate laborum labore pariatur.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
  ];

  return (
    <>
      <div ref={ref} className="  fixed w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Forground;
