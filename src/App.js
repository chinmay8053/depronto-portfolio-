import "./App.css";
import Blog from "./components/blog/blog.component";
import BootstrapSlideShow from "./components/bootstrap/bootstrap.component";
import FeedbackForm from "./components/form/form.component";
import TableApp from "./components/table/table.component";

function App() {
  return (
    <div className="App">
      <header className="author">
        Made By <span className="name"> Chinmay Raju Suryavanshi</span>
      </header>
      <BootstrapSlideShow />
      <TableApp />
      <Blog />
      <FeedbackForm />
    </div>
  );
}

export default App;
