export const prepareCharacters = (data: {
  message: string[];
  status: string;
}) => {
  return data.message.map((url, index) => {
    const name = url.split("/").pop()?.split(".")[0] || "Unknown";

    return {
      id: index + 1,
      name,
      description: "",
      isDead: false,
      thumbnail: url,
    };
  });
};
