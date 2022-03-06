import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "テスト",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "example@ne.jp",
  phone: "000-9999-8888",
  company: {
    name: "sample会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
