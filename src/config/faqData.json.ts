export interface FaqItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

// replace this data with whatever you want in your FAQ section
export const faqData: FaqItem[] = [
  {
    question: "Who are the themes for?",
    answer: `These themes are for developers who want to have pre-created templates to use in their projects,
    and have the hard stuff taken care of. Whether that is personal projects, a new SaaS business, a website for a client, etc.
    They offer speed, customizability with swappable 
    components, built-in SEO, and image optimization. Instead of spending hours figuring out 
    how to do this yourself, you can leverage the themes to save weeks of time and effort. You can easily 
    mix and match sections, update the copy, and change the color theme with just one line of code.`,
  },
  {
    question: "What all components are included?",
    answer: `A total of over 40 components. Including 8 feature sections, 4 CTA sections, 3 hero sections, 3 pricing sections, 
      2 testimonial sections, 2 faq sections, 2 logo clouds, login, signup, contact, 404, legal, blog index, 2 blog post layouts.`,
  },
  {
    question: "Why Astro?",
    answer: `Astro is an excellent framework for content-focused websites, with a great developer
      experience. It also allows you to use any UI framework you want within it, such as React, Vue,
      and Svelte. This means you can use any of your existing components, or any of the thousands of 
      components available online. `,
  },
  {
    question: "If I purchased a theme, can I use it for multiple projects?",
    answer: `Yes, you can use any of our themes for as many projects as you like.
      You can even sell websites you create with them to your clients. As long as you
      don't resell the theme itself, you're likely to go! See our
      <a href="https://cosmicthemes.com/license/" target="_blank" rel="noopener noreferrer">License</a> 
      page for more details.`,
  },
  {
    question: 'What do you mean by "free updates"?',
    answer: `When you purchase any of our themes, you get lifetime updates for free. 
      We regularly update our themes to ensure compatibility with the latest version of Astro, 
      and to add new features or bug fixes.`,
  },
  {
    question: "How do I download new versions of my purchased themes?",
    answer: `You can download any new versions of the themes by accessing
      your lemonsqueezy library. When you first purchase the theme, I recommend 
      creating a lemonsqueezy account at app.lemonsqueezy.com. Then you will have
      access to any theme updates from that page.`,
  },
];

export default faqData;
