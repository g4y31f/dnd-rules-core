import type Author from './author';

type PostType = {
  slug: string;
  excerpt: string;
  title: string;
  content: string | React.ReactNode;
  date?: string;
  author?: Author;
  ogImage?: {
    url: string;
  };
};

export default PostType;
