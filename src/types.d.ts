type PostDataString = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string | null;
  views: number;
  catSlug: string;
  userEmail: string;
  tag: Tag[];
};

type PostWithUser = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string | null;
  views: number;
  catSlug: string;
  userEmail: string;
  user: User;
  tag: Tag[];
};
