const { getAllPhotos } = require("@/lib/image-data");
const { NextResponse } = require("next/server");

export async function GET() {
  const data = await getAllPhotos();
  return NextResponse.json(data);
}
// export async function GET() {
//   const data = await getAllPhotosSimply();
//   return NextResponse.json(data);
// }
