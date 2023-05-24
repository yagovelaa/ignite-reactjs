import { ActiveLink } from "../ActiveLink";
import { SingInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            Home
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            Posts
          </ActiveLink>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}
