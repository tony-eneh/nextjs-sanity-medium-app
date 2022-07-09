import { sanityClient } from '../../sanity';
import { Post } from '../../typings';
import { GetStaticProps } from 'next';
import Header from '../../components/Header';

interface Props {
  post: Post;
}
function Post({ post }: Props) {
  return <div>
    <Header />

    <main>
      the damn post {post.title}
    </main>
  </div>;
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug,
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((path: Post) => ({
    params: {
      slug: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        author -> {
            name,
            image
        },
        description,
        slug,
        mainImage
    }`;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default Post;
