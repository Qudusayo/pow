import styles from "@/styles/Home.module.scss";

import Banner from "@/components/Banner/Banner";
import StatCard from "@/components/StatCard/StatCard";
import { Divider } from "@mui/material";
import Button from "@/components/Button/Button";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";

import { HiOutlineLanguage } from "react-icons/hi2";
import { BsGenderMale, BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <section className={styles.Profile}>
      <Banner />
      <section className={styles.ProfileContent}>
        <div className={styles.ProfileContentInfo}>
          <StatCard />
          <div className={styles.ProfileContentInfoAbout}>
            <h2>About Freelancer</h2>
            <p>
              I have been a freelance developer since 2017, with a focus on
              turning ideas into high quality code. My areas of expertise
              include backend systems, automated trading systems, and
              decentralized applications (DApps). I have also worked with
              startups in the past, which has given me the ability to build
              products efficiently and cost-effectively.{" "}
            </p>
            <p>
              I am actively involved in open source organizations and have
              written detailed technical tutorials on various topics. Some of my
              work has been featured on HackerNews, GitHub, newsletters, and
              podcasts such as PythonBytes and PythonWeekly. If you have an
              interesting opportunity that you would like to discuss, please do
              not hesitate to reach out. I am always open to considering new
              projects.
            </p>
          </div>
          <Divider style={{ background: "#363535" }} />
          <div className={styles.ProfileContentInfoEducation}>
            <h2 className={styles.ProfileContentInfoEducationTitle}>
              Education
            </h2>
            <ul>
              <li data-icon="c">
                <span>2008 - 2011</span>
                <h3>Computer Science</h3>
                <h3>Modern University</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, in incidunt! Illo amet debitis repellendus nobis facere
                  doloremque odio accusantium?
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ProfileContentCard}>
          <div className={styles.Card}>
            <div>
              <h2>$60.00 - $85.00</h2>
              <span>/hr</span>
            </div>
            <ul className={styles.ProfileContentCardList}>
              <li>
                <div>
                  <HiOutlineLocationMarker stroke="#aed2c2" />
                  <span>Location</span>
                </div>
                <span>New York</span>
              </li>
              <li>
                <div>
                  <HiOutlineDocumentDuplicate stroke="#aed2c2" />
                  <span>Type</span>
                </div>
                <span>Agency Freelancers</span>
              </li>
              <li>
                <div>
                  <HiOutlineLanguage stroke="#aed2c2" />
                  <span>English Level</span>
                </div>
                <span>Professional</span>
              </li>
              <li>
                <div>
                  <BsGenderMale fill="#aed2c2" />
                  <span>Gender</span>
                </div>
                <span>Male</span>
              </li>
              <li>
                <div>
                  <HiOutlineMail stroke="#aed2c2" />
                  <span>Email</span>
                </div>
                <span>sampleemail@gmail.con</span>
              </li>
              <li>
                <div>
                  <HiOutlinePhone stroke="#aed2c2" />
                  <span>Phone Number</span>
                </div>
                <span>(+88)124-45-6-789</span>
              </li>
            </ul>
            <Button
              full={true}
              title="Contact Me   ."
              icon={<BsArrowUpRight />}
            />
          </div>
          <div className={styles.Card}>
            <h3>My Skills</h3>
            <div className={styles.CardSkills}>
              <span>Design Writing</span>
              <span>HTML</span>
              <span>Prototyping</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
