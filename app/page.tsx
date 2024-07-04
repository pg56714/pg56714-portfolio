import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"
import { CONFIG } from "site.config";

async function getData() {
  // return await (await get(ref(database))).val()

  let res;

  if (CONFIG.useFirebase.enable === true) {
    const DB_URL = CONFIG.useFirebase.config.host + "/.json";
    res = await fetch(DB_URL, { cache: "no-store" });
  } else {
    const JSON_URL = CONFIG.link + "/data.json";
    res = await fetch(JSON_URL, { cache: "no-store" });
  }

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export default async function page() {
  const data = await getData();

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
