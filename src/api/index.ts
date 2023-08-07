import { Info } from "@/types";

const URL = "https://api-jobtest.json2bot.chat/test";

export const getInfo = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    return result.data;
  } catch (err) {
    alert(err);
  }
};

export const postInfo = async (body: Info) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    alert(result.data.message);

    return result.data;
  } catch (err) {
    alert(err);
  }
};
