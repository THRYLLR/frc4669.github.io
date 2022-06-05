import styles from "../styles/components/DropdownMenu.module.css";
import Link from "next/link";

export default function DropdownMenu(props) {
  return (
    <div className={styles.container}>
      <span>
        {props.title}
      </span>
      <div>
        <div></div>
        <div className={styles.dropdown}>
          <ul>
            {props.items.map(([text, value], index) => (
              <li key={index}>
                <Link href={value}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
