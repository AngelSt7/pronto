import AuthModal from "@/src/providers/AuthModal";
import OrquestTabs from "./components/OrquestTabs";
import LoginProntoWeb from "./components/LoginProntoWeb";
import { getCookies } from "@/src/security/cookies";
import TitleHeading from "@/src/components/ui/TitleHeading";

export default async function Home() {
  const cookies = await getCookies(["token", "user"]);
  const session = cookies.find((cookie) => cookie.name === "token")?.value;

  return (
    <main className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-zinc-50 p-10">

      {session && <TitleHeading text="Welcome to the Pronto App" />}
      
      {session && <OrquestTabs token={session} />}

      {!session && <AuthModal
        isOpen={!session}
        children={<LoginProntoWeb />}
      />}
      
    </main>
  );
}
