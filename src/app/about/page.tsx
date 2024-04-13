import Image from 'next/image';
import myImage from './me.png';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="Me" loading="eager" />
      <div className={''}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eius
        nobis exercitationem culpa dolor assumenda, voluptatem voluptate sit,
        ipsam inventore quam. Voluptatem quam eligendi voluptas! Laborum cum
        dolore necessitatibus unde!
      </div>
    </article>
  );
}
