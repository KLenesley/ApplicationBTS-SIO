import Image from "next/image";

export default function Home() {
  let user;
  user = "";
  if (user == "") {
      user = null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
      <h1 className="text-4xl font-bold">Bonjour {user}</h1>
      <p className="text-lg text-gray-600 mt-2">
        Bienvenue sur le site de présentation du BTS SIO !
      </p>
      </header>

      <main className="w-full max-w-3xl">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
        Présentation du BTS SIO
        </h2>
        <p className="text-lg text-center">
        Le BTS SIO (<i>Services Informatiques aux Organisations</i>) est une
        formation en informatique qui prépare les étudiants à devenir des
        professionnels compétents dans le domaine des technologies de
        l'information.
        </p>
      </section>
      <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Navigation
        </h2>
        <ul className="flex flex-col gap-4 text-center">
          <li>
        <a
          href="/presentation"
          className="rounded-md bg-gray-200 text-gray-800 font-medium text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 shadow hover:bg-gray-300 transition-colors duration-300"
        >
          Présentation du BTS SIO
        </a>
          </li>
          <li>
        <a
          href="/quiz"
          className="rounded-md bg-gray-200 text-gray-800 font-medium text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 shadow hover:bg-gray-300 transition-colors duration-300"
        >
          Quiz "Suis-je fait pour le BTS SIO ?"
        </a>
          </li>
          <li>
        <a
          href="/specialites"
          className="rounded-md bg-gray-200 text-gray-800 font-medium text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 shadow hover:bg-gray-300 transition-colors duration-300"
        >
          Découvrir les spécialités
        </a>
          </li>
        </ul>
      </section>
      </main>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
