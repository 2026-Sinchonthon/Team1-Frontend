const FRAME_WIDTH = 390;
const FRAME_HEIGHT = 844;

function MainPage() {
  return (
    <div className="min-h-dvh bg-gray-100">
      <div
        className="mx-auto flex min-h-dvh w-full flex-col bg-white shadow-sm sm:min-h-[var(--frame-height)]"
        style={{
          '--frame-height': `${FRAME_HEIGHT}px`,
          maxWidth: `${FRAME_WIDTH}px`,
        }}
      >
        <header className="shrink-0" />

        <main className="flex-1" />

        <footer className="shrink-0" />
      </div>
    </div>
  );
}

export default MainPage;
