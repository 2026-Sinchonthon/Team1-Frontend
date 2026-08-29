const FRAME_WIDTH = 390;
const FRAME_HEIGHT = 844;

function MobileLayout({ children, header, footer }) {
  return (
    <div className="h-dvh overflow-hidden bg-gray-100">
      <div
        className="mx-auto flex h-dvh w-full flex-col overflow-hidden bg-white shadow-sm sm:h-[var(--frame-height)] sm:max-h-dvh"
        style={{
          '--frame-height': `${FRAME_HEIGHT}px`,
          maxWidth: `${FRAME_WIDTH}px`,
        }}
      >
        <div className="h-[52px] shrink-0 bg-white" />

        {header && <header className="shrink-0">{header}</header>}

        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</main>

        {footer && <footer className="shrink-0">{footer}</footer>}
      </div>
    </div>
  );
}

export default MobileLayout;
