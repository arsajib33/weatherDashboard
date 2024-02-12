import backgroundImg from "./assets/body-bg.png";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
function App() {
  return (
    <>
      <div
        className={`bg-body font-[Roboto] text-light bg-[url('${backgroundImg}')] bg-no-repeat bg-cover h-screen grid place-items-center
        `}
      >
        <Header />

        <main>
          <section className="">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
