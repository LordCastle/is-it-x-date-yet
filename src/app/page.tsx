import TheAnswer from "@/components/TheAnswer";
import TheQuestion from "@/components/TheQuestion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { DateTimeProvider } from "@/context/DateTimeContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <DateTimeProvider>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[var(--background)] text-[var(--foreground)]">
          <header className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center">
            <h1 className="text-3xl sm:text-5xl font-bold">Is it X yet?</h1>
          </header>
          <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
            <TheQuestion />
            <TheAnswer />
          </main>
          <footer className="row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center mt-10">
            <section className="flex flex-col justify-center items-center gap-2">
              Theme: <ThemeSwitcher />
            </section>
            <p>&copy;2025 Chris Castle</p>
          </footer>
        </div>
      </DateTimeProvider>
    </ThemeProvider>
  );
}
