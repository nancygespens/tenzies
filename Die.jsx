// Pip slot positions in a 3x3 grid (1=top-left ... 9=bottom-right)
// true = pip visible, false = empty slot
const pipLayout = {
  1: [false, false, false, false, true, false, false, false, false],
  2: [false, false, true, false, false, false, true, false, false],
  3: [false, false, true, false, true, false, true, false, false],
  4: [true, false, true, false, false, false, true, false, true],
  5: [true, false, true, false, true, false, true, false, true],
  6: [true, false, true, true, false, true, true, false, true],
};

export default function Die(props) {
  const pips = pipLayout[props.value];

  return (
    <button
      className={`die-face ${props.isHeld ? "held" : ""}`}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
    >
      {pips.map((active, i) => (
        <span key={i} className={`pip ${active ? "pip--active" : ""}`} />
      ))}
    </button>
  );
}
