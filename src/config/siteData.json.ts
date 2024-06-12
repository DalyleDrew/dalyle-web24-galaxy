export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
  // EXTRAS
  analytics?: {
    ga?: {
      measurementId: string; // @example `G-12ABC3DE45`
    }
    gtm?: {
      id: string; // @example `GTM-1AB2CDEFG`
    }
  }

}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Dalyle DevOps Inc.",
  // Your website's title and description (meta fields)
  title:
    "Dalyle - an attempt to solving the state of web dev since 2019.",
  description:
    "",
  useViewTransitions: true,
  useAnimations: true,
  // Your information!
  author: {
    name: "Dalyle DevOps Inc.",
    email: "hello@dalyle.ca",
    twitter: "DDOINC",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },

  // Google Analytics (GA) & Google Tag Manager (GTM)
  analytics: {
    ga: {
      measurementId: "G-48XHG9PY02"
    },
    gtm: {
      id: "GTM-5M6DTVZT"
    }
  }

};

export default siteData;
