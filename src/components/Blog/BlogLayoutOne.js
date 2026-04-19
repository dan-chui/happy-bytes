import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";
import { format } from "date-fns";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group relative w-full h-full min-h-[22rem] sm:min-h-[26rem] lg:min-h-[32rem] overflow-hidden rounded-xl">
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className="object-cover object-center rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1536px) 100vw, 50vw"
        unoptimized={process.env.NODE_ENV === "development"}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 rounded-xl z-10" />

      <div className="absolute bottom-0 w-full p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />

        <Link href={blog.url} className="mt-6 block">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block mt-2 w-full capitalize text-light/70 font-medium text-xs sm:text-sm md:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
