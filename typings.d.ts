export interface Post {
  _id: string;
  title: string;
  author: {
    name: string;
    image: SanityImage;
  };
  description: string;
  slug: {
    _type: string;
    current: string;
  };
  mainImage: SanityImage;
}

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
