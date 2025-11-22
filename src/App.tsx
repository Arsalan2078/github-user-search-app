import css from "./App.module.scss";
import TextPresets from "./components/TextPresets";

export default function App() {
  return (
    <div className={css.app}>
      <TextPresets />

      {/* devfinder

      Light
      Dark

      Search GitHub username...
      Search

      Joined

      Repos
      Followers
      Following */}
    </div>
  );
}
