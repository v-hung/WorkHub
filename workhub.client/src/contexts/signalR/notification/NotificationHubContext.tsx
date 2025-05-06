import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useReceiveMessageHandler } from "./useReceiveMessageHandler";

interface NotificationHubContextType {
  connection: HubConnection | null;
  isConnected: boolean;
}

const NotificationHubContext = createContext<NotificationHubContextType>({
  connection: null,
  isConnected: false,
});

export const NotificationHubProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("/hubs/notification")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);

    return () => {
      newConnection?.stop();
    };
  }, []);

  useEffect(() => {
    if (!connection) return;

    connection
      .start()
      .then(() => {
        setIsConnected(true);
        connection.invoke("RequestUnReadCount");
        console.log("Connected to NotificationHub hub");
      })
      .catch((err) => console.error("NotificationHub connection error: ", err));

    connection.onclose(() => {
      setIsConnected(false);
      console.log("NotificationHub disconnected");
    });
  }, [connection]);

  useReceiveMessageHandler(connection);

  return (
    <NotificationHubContext.Provider value={{ connection, isConnected }}>
      {children}
    </NotificationHubContext.Provider>
  );
};

export const useNotificationHub = () => useContext(NotificationHubContext);
