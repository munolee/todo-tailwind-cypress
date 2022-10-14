import { FC, PropsWithChildren } from "react";
import styles from "../../../styles/layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
