// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // 컴포넌트 생성 시 API요청이 두번 실행되므로 주석 처리하였습니다.
  //  <React.StrictMode>
  <App />
  //  </React.StrictMode>
);
