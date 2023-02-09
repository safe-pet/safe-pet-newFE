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
  const socket = io("http://localhost:4000");

  interface IChat {
    username: string;
    message: string;
  }

  const [chats, setChats] = useState<IChat[]>([]);
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
  useEffect(() => {
    const messageHandler = (chat: IChat) =>
      setChats(prevChats => [...prevChats, chat]);
    socket.on("message", messageHandler);

    return () => {
      socket.off("message", messageHandler);
    };
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  const onSendMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!message) return alert("메시지를 입력해 주세요.");

      socket.emit("message", message, (chat: IChat) => {
        setChats(prevChats => [...prevChats, chat]);
        setMessage("");
      });
    },
    [message],
  );

  return (
    <Container>
      <p>new Component</p>
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
        <button>보내기</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
`;
