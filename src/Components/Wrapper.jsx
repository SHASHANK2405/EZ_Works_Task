import React from "react";
import Image1 from "../Assets/Research@4x-1.png";
import Image2 from "../Assets/Research@4x-2.png";
import Image3 from "../Assets/Research@4x-3.png";
import Image4 from "../Assets/Research@4x-4@2x.png";
import Image5 from "../Assets/Research@4x-5@2x.png";
import Image6 from "../Assets/Research@4x.png";
import Card from "./Card";

const cardData = [
  {
    order: 1,
    logo: Image5,
    title: "Presentation Design",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    order: 2,
    logo: Image2,
    title: "Audio - Visual Production",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    order: 3,
    logo: Image1,
    title: "Translation Services",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    order: 4,
    logo: Image4,
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    order: 5,
    logo: Image6,
    title: "Research & Analytics",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    order: 6,
    logo: Image3,
    title: "Data Processing",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];

const Wrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:-[40px] place-items-center">
      {cardData.map((card) => (
        <Card card={card} key={card.order} />
      ))}
    </div>
  );
};

export default Wrapper;