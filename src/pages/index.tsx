import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { router } from "next/client";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const myvalue = localStorage.getItem("user");
      if (myvalue) {
        const myParsValue = JSON.parse(myvalue);
        if (myParsValue.emails !== "" && myParsValue.passwords !== "") {
          router.push("/chat");
        }
      } else {
        router.push("/singUp");
      }
    }
  }, []);
}
