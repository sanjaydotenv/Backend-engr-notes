import Broadcasting from "../../content/backend/10-real-time-communication/Broadcasting";
import ChatApplication from "../../content/backend/10-real-time-communication/ChatApplication";
import Namespaces from "../../content/backend/10-real-time-communication/Namespaces";
import RealTimeNotifications from "../../content/backend/10-real-time-communication/RealTimeNotifications";
import Rooms from "../../content/backend/10-real-time-communication/Rooms";
import BroaSocketIOdcasting from "../../content/backend/10-real-time-communication/SocketIO";
import WebSocketHandshake from "../../content/backend/10-real-time-communication/WebSocketHandshake";
import WebSockets from "../../content/backend/10-real-time-communication/WebSockets";
import WhatisRealTimeCommunication from "../../content/backend/10-real-time-communication/WhatisRealTimeCommunication";

export const RealTimeCommunication = [
  {
    path: "/broadcasting",
    element: <Broadcasting />,
    label: "Broadcasting",
  },
  {
    path: "/chat-application",
    element: <ChatApplication />,
    label: "Chat Application",
  },
  {
    path: "/namespaces",
    element: <Namespaces />,
    label: "Namespaces",
  },
  {
    path: "/real-time-notifications",
    element: <RealTimeNotifications />,
    label: "Real-Time Notifications",
  },
  {
    path: "/rooms",
    element: <Rooms />,
    label: "Rooms",
  },
  {
    path: "/socketio",
    element: <BroaSocketIOdcasting />,
    label: "Socket.IO",
  },
  {
    path: "/websocket-handshake",
    element: <WebSocketHandshake />,
    label: "WebSocket Handshake",
  },
  {
    path: "/websockets",
    element: <WebSockets />,
    label: "WebSockets",
  },
  {
    path: "/what-is-real-time-communication",
    element: <WhatisRealTimeCommunication />,
    label: "What is Real-Time Communication",
  },
];
