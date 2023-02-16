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

export default function Chat() {
  const socket = io("http://localhost:3001", {
    // ws:// 를 안쓰고 http를 쓴다
    path: "/socket.io", // 서버 path와 일치시켜준다
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");

      socket.emit("events", { test: "test" });
      socket.emit("identity", 0, (response: any) =>
        console.log("Identity:", response),
      );
    });
    socket.on("message", data => {
      console.log("event", data);
    });
    socket.on("exception", data => {
      console.log("event", data);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
  }, []);

  interface IChat {
    username: string;
    message: string;
  }

  const [chats, setChats] = useState<IChat[]>([
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
    {
      username: "John",
      message: "ㅎㅇㅎㅇㅎㅇㅇ",
    },
  ]);
  const [message, setMessage] = useState<string>("");
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

  // message event listener
  // useEffect(() => {
  //   const messageHandler = (chat: IChat) =>
  //     setChats(prevChats => [...prevChats, chat]);
  //   socket.on("message", messageHandler);

  //   return () => {
  //     socket.off("message", messageHandler);
  //   };
  // }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  const onSendMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("11111", message);
      if (!message) return alert("메시지를 입력해 주세요.");

      socket.emit("message", message, (chat: IChat) => {
        console.log(chat);
        console.log("22222", message);
        setChats(prevChats => [...prevChats, chat]);
        setMessage("");
      });
      console.log("3333", message);
    },
    [message],
  );

  return (
    <Container>
      <div ref={chatContainerEl}>
        {chats.map((chat, index) => (
          <div key={index}>
            <span>
              {chat.username
                ? socket.id === chat.username
                  ? ""
                  : chat.username
                : ""}
            </span>
            <span className="message">{chat.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={onSendMessage}>
        <input type="text" onChange={onChange} value={message} />
        <button type="submit">보내기</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
`;
