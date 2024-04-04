import React from "react";

import { StructuredText } from "react-datocms";

import { motion } from "framer-motion";

import { Link, animateScroll as scroll } from "react-scroll";

//Query
import BLOG_QUERY from "../../data/query/query";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Image from "next/image";
import { request } from "../../lib/datocms";
//components
import HeadSeo from "../../components/Head";
import BlogCart from "../../components/BlogCart";

export default function BlogPost({ postData, allPosts }) {
  //Destrukturyzacja
  const {
    firstPoint,
    secondPoint,
    thirdPoint,
    fourthPoint,
    fifthPoint,
    sixthPoint,
    seventhPoint,
    eighthPoint,
    ninthPoint,
    tenthPoint,
    imageFirstPoint,
    contentFirstPoint,
    imageSecondPoint,
    contentSecondPoint,
    imageThirdPoint,
    contentThirdPoint,
    imageFourthPoint,
    contentFourthPoint,
    imageFifthPoint,
    contentFifthPoint,
    imageSixthPoint,
    contentSixthPoint,
    imageSeventhPoint,
    contentSeventhPoint,
    imageEighthPoint,
    contentEighthPoint,
    imageNinthPoint,
    contentNinthPoint,
    imageTenthPoint,
    contentTenthPoint,
    secondImageFirstPoint,
    secondContentFirstPoint,
    secondImageSecondPoint,
    secondContentSecondPoint,
    secondImageThirdPoint,
    secondContentThirdPoint,
    secondImageFourthPoint,
    secondContentFourthPoint,
    secondImageFifthPoint,
    secondContentFifthPoint,
    secondImageSixthPoint,
    secondContentSixthPoint,
    secondImageSeventhPoint,
    secondContentSeventhPoint,
    secondImageEighthPoint,
    secondContentEighthPoint,
    secondImageNinthPoint,
    secondContentNinthPoint,
    secondImageTenthPoint,
    secondContentTenthPoint,
  } = postData;

  //tablica z tytułami
  let arrayOfTitles = [
    firstPoint,
    secondPoint,
    thirdPoint,
    fourthPoint,
    fifthPoint,
    sixthPoint,
    seventhPoint,
    eighthPoint,
    ninthPoint,
    tenthPoint,
  ];
  let filteredArrayOfTitles = arrayOfTitles.filter((el) => el !== "");

  const content = [
    {
      title: firstPoint,
      image: imageFirstPoint,
      content: contentFirstPoint,
      sec_image: secondImageFirstPoint,
      sec_content: secondContentFirstPoint,
    },
    {
      title: secondPoint,
      image: imageSecondPoint,
      content: contentSecondPoint,
      sec_image: secondImageSecondPoint,
      sec_content: secondContentSecondPoint,
    },
    {
      title: thirdPoint,
      image: imageThirdPoint,
      content: contentThirdPoint,
      sec_image: secondImageThirdPoint,
      sec_content: secondContentThirdPoint,
    },
    {
      title: fourthPoint,
      image: imageFourthPoint,
      content: contentFourthPoint,
      sec_image: secondImageFourthPoint,
      sec_content: secondContentFourthPoint,
    },
    {
      title: fifthPoint,
      image: imageFifthPoint,
      content: contentFifthPoint,
      sec_image: secondImageFifthPoint,
      sec_content: secondContentFifthPoint,
    },
    {
      title: sixthPoint,
      image: imageSixthPoint,
      content: contentSixthPoint,
      sec_image: secondImageSixthPoint,
      sec_content: secondContentSixthPoint,
    },
    {
      title: seventhPoint,
      image: imageSeventhPoint,
      content: contentSeventhPoint,
      sec_image: secondImageSeventhPoint,
      sec_content: secondContentSeventhPoint,
    },
    {
      title: eighthPoint,
      image: imageEighthPoint,
      content: contentEighthPoint,
      sec_image: secondImageEighthPoint,
      sec_content: secondContentEighthPoint,
    },
    {
      title: ninthPoint,
      image: imageNinthPoint,
      content: contentNinthPoint,
      sec_image: secondImageNinthPoint,
      sec_content: secondContentNinthPoint,
    },
    {
      title: tenthPoint,
      image: imageTenthPoint,
      content: contentTenthPoint,
      sec_image: secondImageTenthPoint,
      sec_content: secondContentTenthPoint,
    },
  ];

  //filtrowanie postów, aby nie zawierał aktualnego posta w polecanych
  const filteredPosts = allPosts.filter((el) => el.id !== postData.id);

  if (!postData) return null;

  return (
    <>
      <HeadSeo
        title={`Pink Helmet - ${postData.title}`}
        description={postData.titleDescription}
      />
      <motion.div
        id="top"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="mx-auto "
        key={postData.id}
      >
        {postData.coverImage.responsiveImage && (
          <Image
            src={postData?.coverImage?.responsiveImage}
            className="container w-auto cover mx-auto mb-6 self-center"
            alt={postData?.coverImage?.responsiveImage.alt}
          />
        )}
        <div className="flex flex-col justify-center text-justify leading-8 mx-2">
          <h1 className="text-4xl w-full text-center p-6">{postData.title}</h1>

          <div className="w-fit bg-pink-rose p-2 rounded group hover:bg-pink-600 transition duration-300">
            <a href="/blog">
              <ArrowBackIcon className="transition duration-300 transform group-hover:-translate-x-1 group-hover:text-white " />
              <span className="inline-block text-sm uppercase ml-2 group-hover:text-white transition duration-300">
                Cofnij do pozostałych artykułów
              </span>
            </a>
          </div>

          <ol className="list-decimal p-6">
            {filteredArrayOfTitles.map((el, index) => (
              <li key={index}>
                <Link
                  to={el}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="cursor-pointer"
                >
                  {el}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <section className="relative w-full flex flex-col lg:flex-row border-t-2">
          <div className="lg:w-9/12">
            {content &&
              content.map((el, index) => (
                <React.Fragment key={index}>
                  {el.title !== "" && (
                    <div id={el.title}>
                      {el?.title && (
                        <h3 className="text-3xl mt-5 p-4">{el.title}</h3>
                      )}
                      {el?.image?.responsiveImage && (
                        <Image
                          src={el?.image?.responsiveImage}
                          className="w-4/6 mx-auto cover mb-1 self-center"
                          alt={el?.image?.responsiveImage.alt}
                        />
                      )}
                      <span className="inline-block w-full text-center text-sm mb-5">
                        {el?.image?.responsiveImage.alt}
                      </span>
                      {el?.content && (
                        <div className="mx-2 my-4 text-justify">
                          <StructuredText data={el?.content} />
                        </div>
                      )}
                      {el?.sec_image?.responsiveImage && (
                        <Image
                          src={el?.sec_image?.responsiveImage}
                          className="w-4/6 mx-auto cover mb-1 self-center"
                          alt={el?.sec_image?.responsiveImage.alt}
                        />
                      )}
                      <span className="inline-block w-full text-center text-sm mb-5">
                        {el?.sec_image?.responsiveImage.alt}
                      </span>
                      {el?.sec_content && (
                        <div className="mx-2 my-4 text-justify">
                          <StructuredText data={el?.sec_content} />
                        </div>
                      )}
                      <div className="w-1/2 mx-auto p-6">
                        <span className="block border-t-2 border-pink-rose w-full"></span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
          <div className="lg:w-3/12 border-t-2 lg:border-t-0 lg:border-l-2 relative">
            <div className="stickyClass p-2">
              <h3 className="text-center">Polecane Artykuły</h3>
              {filteredPosts.map((el, index) => (
                <BlogCart el={el} index={index} key={index} />
              ))}
            </div>
          </div>

          <div className="fixed bottom-4 right-4 border p-3 rounded bg-pink-rose text-white hover:bg-pink-600 hover:text-white transition duration-300">
            <Link
              to={"top"}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="cursor-pointer"
            >
              <KeyboardArrowUpIcon style={{ fontSize: 35 }} />
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export const getServerSideProps = async ({ params, preview }) => {
  const graphqlRequest = {
    query: BLOG_QUERY,
    variables: { slug: params.slug },
    preview,
  };

  const data = await request(graphqlRequest);

  return {
    props: {
      postData: data.blog,
      allPosts: data.allBlogs,
    },
  };
};
