import React from "react";

const Card = ({ card }) => {
  return (
    <div className="bg-darkblue w-[311px] h-[254px] p-[1.9rem] rounded-xl">
      <div className="flex gap-5 items-center">
        <img src={card.logo} width={58} height={58} />
        <h3 className="text-blue text-2xl">{card.title}</h3>
      </div>
      <p className="text-white mt-5 text-2xl leading-[1.81rem]">{card.text}</p>
    </div>
  );
};

export default Card;