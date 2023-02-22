import styled from "styled-components";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  // ws:// 를 안쓰고 http를 쓴다
  path: "/socket.io", // 서버 path와 일치시켜준다
  transports: ["websocket"],
});

interface ChildProps {
  isOpen: boolean;
  closeRoom: () => void;
}

export const ChatRoom = ({ isOpen, closeRoom }: ChildProps) => {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState<any>("");
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState<any>([]);

  const [response, setResponse] = useState();
  console.log(message);
  useEffect(() => {
    // Subscribe to the 'message' event to receive new messages
    socket.on("message", data => {
      setMessages((messages: any) => [...messages, data]);
    });

    // Subscribe to the 'rooms' event to receive the list of available rooms
    socket.on("rooms", data => {
      setRooms(data);
    });
  }, []);

  const handleCreateRoom = () => {
    // Emit the 'createRoom' event to the server
    socket.emit("createRoom", roomName);
  };

  const handleJoinRoom = (roomName: any) => {
    // Emit the 'joinRoom' event to the server
    setRoomName(roomName);
    setMessages((prev: any) =>
      prev.concat({
        sender: "SYSTEM",
        message: `you join to ${roomName} room`,
      }),
    );
    socket.emit("joinRoom", roomName);
  };

  const handleLeaveRoom = (roomName: any) => {
    // Emit the 'leaveRoom' event to the server
    socket.emit("leaveRoom", roomName);
  };

  const handleSendMessage = () => {
    // Emit the 'sendMessage' event to the server
    socket.emit("sendMessage", { roomName: roomName, message: message });
  };

  const handleDeleteRoom = (roomName: any) => {
    // Emit the 'deleteRoom' event to the server
    socket.emit("deleteRoom", roomName);
  };

  interface IChat {
    nickname: string;
    message: string;
  }

  const [chats, setChats] = useState<IChat[]>([
    {
      nickname: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      nickname: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
  ]);

  const chatContainerEl = useRef<HTMLDivElement>(null);

  // 채팅이 길어지면(chats.length) 스크롤이 생성되므로, 스크롤의 위치를 최근 메시지에 위치시키기 위함
  useEffect(() => {
    if (!chatContainerEl.current) return;

    const chatContainer = chatContainerEl.current;
    const { scrollHeight, clientHeight } = chatContainer;

    if (scrollHeight > clientHeight) {
      chatContainer.scrollTop = scrollHeight - clientHeight;
    }
  }, [chats.length]);

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // const onSendMessage = useCallback(
  //   (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log("11111", {
  //       nickname: "john111",
  //       message: message,
  //     });
  //     if (!message) return alert("메시지를 입력해 주세요.");

  //     socket.emit(
  //       "message",
  //       {
  //         nickname: "john111",
  //         message: message,
  //       },
  //       (chat: IChat) => {
  //         console.log(chat);
  //         console.log("22222", {
  //           nickname: "john111",
  //           message: message,
  //         });
  //         setChats(prevChats => [...prevChats, chat]);
  //         setMessage("");
  //       },
  //     );
  //     console.log("3333", {
  //       nickname: "john111",
  //       message: message,
  //     });
  //   },
  //   [message],
  // );

  return (
    <Container
      style={
        isOpen
          ? { transform: "translate(-50%, -50%)" }
          : { transform: "translate(150%, -50%)" }
      }
      onClick={e => e.stopPropagation()}
    >
      <button onClick={closeRoom}>닫기</button>
      <div>TEST: {response}</div>
      <div>
        <h1>Rooms</h1>
        <ul>
          {rooms.map((room, index) => (
            <li key={index}>
              {room}
              <button onClick={() => handleJoinRoom(room)}>Join</button>
              <button onClick={() => handleDeleteRoom(room)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={roomName}
          onChange={event => setRoomName(event.target.value)}
        />
        <button onClick={handleCreateRoom}>Create Room</button>
        <button onClick={() => setRooms([])}>Refresh Rooms</button>
        <h1>Messages</h1>
        <ul>
          {messages?.map((message: any, index: number) => (
            <li key={index}>
              {message?.sender}: {message?.message}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={() => handleLeaveRoom(roomName)}>Leave Room</button>
      </div>
      <div ref={chatContainerEl}>
        {chats.map((chat, index) => (
          <div key={index}>
            <span>
              {chat.nickname
                ? socket.id === chat.nickname
                  ? ""
                  : chat.nickname
                : ""}
            </span>
            <span className="message">{chat.message}</span>
          </div>
        ))}
      </div>
      {/* <form onSubmit={onSendMessage}>
        <input type="text" onChange={e => onChangeMessage(e)} value={message} />
        <button type="submit">보내기</button>
      </form> */}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: 0.4s;
  z-index: 10;
`;
