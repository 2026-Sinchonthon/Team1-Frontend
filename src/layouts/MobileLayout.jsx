const FRAME_WIDTH = 390;
const FRAME_HEIGHT = 844;

function MobileLayout({ children, header, footer }) {
  return (
    <div className="min-h-dvh bg-gray-100">
      <div
        className="mx-auto flex min-h-dvh w-full flex-col bg-white shadow-sm sm:min-h-[var(--frame-height)]"
        style={{
          '--frame-height': `${FRAME_HEIGHT}px`,
          maxWidth: `${FRAME_WIDTH}px`,
        }}
      >
        {header && <header className="shrink-0">{header}</header>}

        <main className="flex-1">{children}</main>

        {footer && <footer className="shrink-0">{footer}</footer>}
      </div>
    </div>
  );
}

export default MobileLayout;
