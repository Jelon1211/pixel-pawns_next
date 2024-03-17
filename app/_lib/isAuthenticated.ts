import { IBearer } from "../_types/middleware";

export async function isAuthenticated(bearer: IBearer) {
  if (!bearer) {
    return false;
  }
  try {
    const authResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/users/auth`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearer.value}`,
        },
      }
    );

    const data = await authResponse.json();

    if (!authResponse.ok) {
      return false;
    }

    return true;
  } catch (error) {
    throw new Error(`There was a problem with call: ${error}`);
  }
}
