import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Home({ searchParams }: Props): JSX.Element {
  let page: number = 1;

  if (searchParams.page) {
    page = parseInt(searchParams.page);
  }

  return (
    <div className={styles.container}>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}>
        <CardList page={page} cat={""}></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}
