import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/client";

export function SingInButton() {
  const [session] = useSession();
  
  return session ? (
    <button type="button" className={styles.sigInButton} onClick={(() => signOut())}>
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </button>
  );
}
