import Image from "next/image";
import styles from "./page.module.css";
import os from "os";
import { Counter } from "@/components/Counter";

export default function Home() {
  console.log(os.hostname());

  //but useState는 사용이 불가능
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  );
}
