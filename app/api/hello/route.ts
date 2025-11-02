import { listOfTouristPlaces } from "./ListTouristPlaces";

export async function GET(
) {

  return Response.json(listOfTouristPlaces);
}

export async function POST(request: Request) {
  const list = await request.json();
  const newList = {
    id: listOfTouristPlaces.length + 1,
    name: list.name,
    country: list.country, 
  };
  listOfTouristPlaces.push(newList);
  return new Response(JSON.stringify(newList), {
    headers: {
      "content-Type": "application/json",
    },
    status: 201,
  });
}
