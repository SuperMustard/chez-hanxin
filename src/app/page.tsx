import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css"
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() :JSX.Element{
  return (
  <div className={styles.container}>
    <Featured></Featured>
    <CategoryList></CategoryList>
    <div className={styles.content}>
      <CardList></CardList>
      <Menu></Menu>
    </div>
  </div>
  );
};