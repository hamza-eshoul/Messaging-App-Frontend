export const useAddMessage = () => {
  const addMessage = async (user1_id, user2_id, author, content, authorImg) => {
    const response = await fetch(
      "https://odin-messaging-app-api.onrender.com/conversation/add_message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user1_id,
          user2_id,
          author,
          content,
          authorImg,
        }),
      }
    );

    const json = await response.json();

    if (response.ok) {
      return json;
    }
  };

  return { addMessage };
};
