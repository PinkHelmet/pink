import { Image } from "react-datocms";
import { motion } from "framer-motion";
import HeadSeo from "../../components/Head";
import HeaderTitle from "../../components/HeaderTitle";

import { request } from "../../lib/datocms";
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
  // console.log(posts);
  return (
    <>
      <HeadSeo title={`Pink Helmet - szkolenia`} description={`opis opis`} />
      <HeaderTitle title="Szkolenia" />
      <motion.section
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="container min-h-screen flex flex-col md:flex-row mx-auto min-h-screen w-full"
      >
        {posts.map((el) => (
          <div className="md:w-6/12 md:8/12 m-6 h-2/3 rounded-lg shadow-lg">
            {console.log(el)}
            <div className="rounded-lg">
              <img src={el.coverimage.url} className="rounded-lg " />
            </div>
            <div className="p-6">
              <h2 className="my-4 text-2xl">{el.title}</h2>
              <p className="font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur adipiscing elit. Faucibus vitae
                aliquet nec ullamcorper sit. Dapibus ultrices in iaculis nunc.
                Vitae justo eget magna fermentum. In dictum non consectetur a
                erat nam at. Ultrices dui sapien eget mi proin sed libero enim
                sed. Arcu non sodales neque sodales ut. Vestibulum lorem sed
                risus ultricies tristique.
              </p>
              <div className="flex justify-between py-6 font-thin text-xs">
                <span>Autor: {el.author.name}</span>
                <span>Publikowany: {el.publishDate}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.section>
    </>
  );
}

// const BlogPostPreview = (props) => {
//   const { data } = props;
//   return (
//     <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
//       <Image data={data.coverimage.url} />
//       <h2>
//         {/* <Link href={`/blog/${data.sUg}`}>
//           <a>{data.title}</a>
//         </Link> */}
//       </h2>
//       <div>{data.publishDate}</div>
//       <p>{data.excerpt}</p>
//       <div style={{ fontWeight: "bold" }}>{data.author.name}</div>
//     </div>
//   );
// };
