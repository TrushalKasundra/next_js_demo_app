import { notFound } from "next/navigation";
export const metadata = {
title:"items1",
description:"this item we sold through our web page." 
}

const items = ({
  params
}: {
  params: { categoryId: number; itemsId: number };
}) => {
  if (params.categoryId>=100 || params.itemsId>=100){
    notFound()
  }
  return (
    <div>
      <p>This is catogory no.{params.categoryId} </p>
      <p>and the items id is {params.itemsId}</p>
    </div>
  );
};

export default items;
