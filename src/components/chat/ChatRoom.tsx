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

interface ChildProps {
  isOpen: boolean;
  closeRoom: () => void;
}
export const ChatRoom = ({ isOpen, closeRoom }: ChildProps) => {
  const socket = io("http://localhost:3001", {
    // ws:// 를 안쓰고 http를 쓴다
    path: "/socket.io", // 서버 path와 일치시켜준다
    transports: ["websocket"],
  });
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [roomList, setRoomList] = useState([]);

  const [response, setResponse] = useState();

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Connected to server with ID ${socket.id}`);
    });

    socket.on("roomCreated", message => {
      console.log(message);
    });

    socket.on("roomJoined", message => {
      console.log(message);
    });

    socket.on("messageReceived", message => {
      setMessages(prevMessages => [...prevMessages, message]);
      console.log(message);
    });

    socket.on("roomDeleted", message => {
      console.log(message);
    });

    socket.on("roomLeft", message => {
      console.log(message);
    });

    socket.on("roomList", list => {
      setRoomList(list);
      console.log("Available rooms:", list);
    });

    socket.on("error", message => {
      console.error(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCreateRoom = () => {
    socket.emit("createRoom", roomId);
  };

  const handleJoinRoom = () => {
    socket.emit("joinRoom", roomId);
  };

  const handleSendMessage = () => {
    socket.emit("sendMessage", { roomId, message });
    setMessage("");
  };

  const handleDeleteRoom = () => {
    socket.emit("deleteRoom", roomId);
  };

  const handleLeaveRoom = () => {
    socket.emit("leaveRoom", roomId);
  };

  const handleListRooms = () => {
    socket.emit("listRooms");
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
    {
      nickname: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
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

  const onSendMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("11111", {
        nickname: "john111",
        message: message,
      });
      if (!message) return alert("메시지를 입력해 주세요.");

      socket.emit(
        "message",
        {
          nickname: "john111",
          message: message,
        },
        (chat: IChat) => {
          console.log(chat);
          console.log("22222", {
            nickname: "john111",
            message: message,
          });
          setChats(prevChats => [...prevChats, chat]);
          setMessage("");
        },
      );
      console.log("3333", {
        nickname: "john111",
        message: message,
      });
    },
    [message],
  );

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
        <h1>Socket.io Example</h1>
        <div>
          <label>Room ID:</label>
          <input
            type="text"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          />
          <button onClick={handleCreateRoom}>Create Room</button>
          <button onClick={handleJoinRoom}>Join Room</button>
          <button onClick={handleDeleteRoom}>Delete Room</button>
          <button onClick={handleLeaveRoom}>Leave Room</button>
          <button onClick={handleListRooms}>List Rooms</button>
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        <div>
          <h2>Messages</h2>
          <ul>
            {messages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Room List</h2>
          <ul>
            {roomList.map((room, i) => (
              <li key={i}>{room}</li>
            ))}
          </ul>
        </div>
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
      <form onSubmit={onSendMessage}>
        <input type="text" onChange={e => onChangeMessage(e)} value={message} />
        <button type="submit">보내기</button>
      </form>
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
