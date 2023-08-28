import { useEffect, useState } from "react";
import UserMessagesList from "../components/UserMessagesList";
import MessagesInterface from "../components/MessagesInterface";

const Homepage = () => {
  const [selectedUserConversation, setSelectedUserConversation] =
    useState(null);

  const [usersList, setUsersList] = useState(null);
  const [triggerFetchConversation, setTriggerFetchConversation] =
    useState(null);

  return (
    <>
      <UserMessagesList
        selectedUserConversation={selectedUserConversation}
        setSelectedUserConversation={setSelectedUserConversation}
        usersList={usersList}
        setUsersList={setUsersList}
        triggerFetchConversation={triggerFetchConversation}
      />
      <MessagesInterface
        selectedUserConversation={selectedUserConversation}
        usersList={usersList}
        setUsersList={setUsersList}
        triggerFetchConversation={triggerFetchConversation}
        setTriggerFetchConversation={setTriggerFetchConversation}
        
      />
    </>
  );
};

export default Homepage;
