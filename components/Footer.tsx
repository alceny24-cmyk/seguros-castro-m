export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg pb-20 sm:pb-0">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-6 py-8">
        <p className="text-[13px] text-muted">
          © {year} Inversiones Castro &amp; M SRL. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
