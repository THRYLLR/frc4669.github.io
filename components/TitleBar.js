import styles from "../styles/components/TitleBar.module.css";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu.js";

import teamLogo from "../public/images/logo-team.svg";

export default function TitleBar() {
  return (
    <header className={styles.header}>
      <div className={styles.navLeft}>
        <div>
          <div></div>
          <div className={styles.navItemContainer}>
            <DropdownMenu
              title="FRC TEAM 4669"
              items={[
                ["ABOUT US", "/about"],
                ["MEDIA", "/media"],
              ]}
            />
            <DropdownMenu
              title="COMPETITIONS"
              items={[
                ["2022: RAPID REACT", "/competitions/2022"],
                ["2021: INFINITE RECHARGE", "/competitions/2021"],
                ["2020: INFINITE RECHARGE", "/competitions/2020"],
                ["2019: DEEP SPACE", "/competitions/2019"],
                ["2018: POWER UP", "/competitions/2018"],
                ["2017: STEAMWORKS", "/competitions/2017"],
                ["2016: STRONGHOLD", "/competitions/2016"],
                ["2015: RECYCLE RUSH", "/competitions/2015"],
                ["2014: AERIAL ASSIST", "/competitions/2014"],
              ]}
            />
            <DropdownMenu
              title="PROJECTS"
              items={[
                ["TOTEBOT", "/projects/totebot"],
                ["TRASHBOT", "/projects/trashbot"],
              ]}
            />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div className={styles.navCenter}>
        <Link href="/">
          <a>
            <Image
              className={styles.navCenterLogo}
              src={teamLogo}
              alt="Galileo Robotics logo"
              height={90}
              width={78}
            />
          </a>
        </Link>
      </div>
      <div className={styles.navRight}>
        <div>
          <div></div>
          <div className={styles.navItemContainer}>
            <Link href="/resources">RESOURCES</Link>
            <Link href="/sponsors">SPONSORS</Link>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </header>
  );
}
