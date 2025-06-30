import './App.css';
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import ToDo from "./components/ToDo";
import GitHubStats from "./components/GitHubStats";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <Welcome />
        <ThemeToggle />
      </div>

      <Card title="GitHub Activity">
        <GitHubStats />
      </Card>

      <Card title="Todo List">
        <ToDo />
      </Card>
    </div>
  );
}

export default App;
