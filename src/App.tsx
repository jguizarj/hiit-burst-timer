import Timer from "./components/Timer";
import useCountdown from "./hooks/useCountdown";

const App = () => {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown(60);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Timer timeLeft={timeLeft} />

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={start} disabled={isRunning || timeLeft === 0}>
          Start
        </button>

        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
