export const getCharacters = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");

  if (!response.ok) {
    throw new Error("Failure to get your characters");
  }

  const result = await response.json();

  const prepareCharacters = result.message.map((url: string, index: number) => {
    const name = url.split("/").pop()?.split(".")[0] || "Unknown"; // Pobiera np. "n02113712_352" z URL
    return {
      id: index + 1,
      name: name,
      description: "description",
      isDead: false,
      thumbnail: url,
    };
  });

  return prepareCharacters;
};
