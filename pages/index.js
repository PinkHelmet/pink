import { Image } from "react-datocms";

import { request } from "../lib/datocms";
const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    author {
      name
    }
    content {
      value
    }
    coverimage {
      url
    }
    title
    sUg
    publishDate
    id
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;

  const posts = data.allArticles;
  console.log(posts);
  return (
    <div>
      <p>Auuuuuu</p>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <Image data={data.coverimage.url} />
      <h2>
        {/* <Link href={`/blog/${data.sUg}`}>
          <a>{data.title}</a>
        </Link> */}
      </h2>
      <div>{data.publishDate}</div>
      <p>{data.excerpt}</p>
      <div style={{ fontWeight: "bold" }}>{data.author.name}</div>
    </div>
  );
};
