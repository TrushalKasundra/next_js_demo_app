import { listOfTouristPlaces } from "../ListTouristPlaces";


export async function GET(
 _request:Request,
  { params }: { params: { id: string } }
) {
  const place = listOfTouristPlaces.find((data:any) => {
   return data.id ===parseInt(params?.id);
  });

  return Response.json(place);
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
