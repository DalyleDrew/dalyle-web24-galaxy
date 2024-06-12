import { type CollectionEntry } from "astro:content";
import siteData from "@config/siteData.json";

interface GeneralProps {
  type: "general";
}

export interface BlogProps {
  type: "blog";
  postFrontmatter: CollectionEntry<"blog">["data"];
  image: any; // result of getImage() from Seo.astro
  authors: CollectionEntry<"authors">[];
  canonicalUrl: URL;
}

export type JsonLDProps = BlogProps | GeneralProps;

export default function jsonLDGenerator(props: JsonLDProps) {
  const { type } = props;
  if (type === "blog") {
    const { postFrontmatter, image, authors, canonicalUrl } =
      props as BlogProps;

    let authorsJsonLdArray = authors.map((author) => {
      return {
        "@type": "Person",
        name: author.data.name,
        url: author.data.authorLink,
      };
    });

    let authorsJsonLd;

    if (authorsJsonLdArray.length === 1) {
      authorsJsonLd = authorsJsonLdArray[0];
    } else {
      authorsJsonLd = authorsJsonLdArray;
    }

    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Blogposting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${canonicalUrl}"
        },
        "headline": "${postFrontmatter.title}",
        "description": "${postFrontmatter.description}",
        "image": "${image.src}",
        "author": ${JSON.stringify(authorsJsonLd)},
        "datePublished": "${postFrontmatter.pubDate}",
        "dateModified": "${postFrontmatter.updatedDate}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
