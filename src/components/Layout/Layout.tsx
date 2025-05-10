import { ReactNode } from "react";

import style from "./Layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={style.header}>
        <h1>Test 2 / use React</h1>
      </header>
      <main>{children}</main>
      <footer>Its Footer</footer>
    </>
  );
}
