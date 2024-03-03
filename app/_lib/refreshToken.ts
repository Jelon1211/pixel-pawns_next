"use client";
export async function refreshToken() {
  try {
    const authResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/auth/refresh`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await authResponse.json();
    console.log(data);
  } catch (error) {
    throw new Error(`There was a problem with call: ${error}`);
  }
}
