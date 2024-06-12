import {
  type CollectionEntry,
  getCollection,
  getEntryBySlug,
} from "astro:content";

// --------------------------------------------------------
/**
 * * returns all blog posts, filtered for drafts, sorted by date, and future posts removed
 * use like `const posts = await getAllPosts();`
 */
export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    // filter out draft posts
    return data.draft !== true;
  });

  // filter out future posts and sort by date
  const formattedPosts: CollectionEntry<"blog">[] = formatPosts(posts, {
    filterOutFuturePosts: true,
    sortByDate: true,
    limit: undefined,
  });

  return formattedPosts;
}

/**
 * returns blog posts for /blog/ listing
 * - filtered for drafts and unlisted, sorted by date, and future posts removed
 * use like `const posts = await getAllPosts();`
 */
export async function getPostsListingPublic(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    // filter out draft and unlisted posts
    return data.draft !== true && (!('listed' in data) || data.listed === true);
  });

  // filter out future posts and sort by date
  const formattedPosts: CollectionEntry<"blog">[] = formatPosts(posts, {
    filterOutFuturePosts: true,
    sortByDate: true,
    limit: undefined,
  });

  return formattedPosts;
}

// --------------------------------------------------------
/**
 * * returns all blog posts in a formatted array
 * @param posts: CollectionEntry<"blog">[] - array of posts, unformatted
 * note: this has an optional options object, params below
 * @param filterOutFuturePosts: boolean - if true, filters out future posts
 * @param sortByDate: boolean - if true, sorts posts by date
 * @param limit: number - if number is passed, limits the number of posts returned
 */
interface FormatPostsOptions {
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number;
}

export function formatPosts(
  posts: CollectionEntry<"blog">[],
  {
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  }: FormatPostsOptions = {},
): CollectionEntry<"blog">[] {
  const filteredPosts = posts.reduce((acc: CollectionEntry<"blog">[], post) => {
    const { pubDate } = post.data;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // now we have filteredPosts
  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

// --------------------------------------------------------
/**
 * * returns all authors content collection data used in a blog post, gathered from the blog post authors slugs
 * @param authors: authors: CollectionEntry<"blog">["data"]["authors"] - array of authors slugs from a blog post
 * use like `const authorsData = await getAllAuthorsData();`
 */
export async function getAllAuthorsData(
  authors: CollectionEntry<"blog">["data"]["authors"],
): Promise<CollectionEntry<"authors">[]> {
  const authorsData = authors.map(async (author) => {
    const authorData = await getEntryBySlug("authors", author.slug);

    if (authorData === undefined) {
      throw new Error(
        `Author "${author.slug}" not found in "authors" collection.`,
      );
    }

    return authorData;
  });

  // return a promise that is resolved when all promises in the array have been resolved
  return Promise.all(authorsData);
}
