// app/login/page.tsx
import AuthForm from "@/components/AuthForm";
import BackToHome from "@/components/BackToHome";
import ThemeSwitch from "@/components/ThemeSwitch"

export default function AuthPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <BackToHome />
      <ThemeSwitch />
      <AuthForm />
    </main>
  );
}
