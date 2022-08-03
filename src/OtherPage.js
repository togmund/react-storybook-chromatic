import "./App.css";
import Image from "./components/Image";
import Link from "./components/Link";
import Paragraph from "./components/Paragraph";

function OtherPage() {
  return (
    <div className="App">
      <header className="App-header">
        Header
        <Image />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Link />
      </header>
    </div>
  );
}

export default OtherPage;
