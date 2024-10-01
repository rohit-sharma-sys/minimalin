export const blogs = [
    {
      id: 1,
      title: 'The Art of Layering: Creating Stylish and Functional Outfits',
      content: 'Detailed content about layering outfits...',
      quote: 'Fashion is not just about clothes; it’s about a way of life.',
      imageUrl: require('./images/first-blog.webp'), // Use require for images in the src folder
      date: 'August 01, 2023',
      author: 'Marino Themes',
      comments: 2,
      tags: ['Fashion', 'Layering', 'Winter'],
      previousPost: { id: 2, title: 'A Glimpse into Men’s Fashion Trends' },
      nextPost: { id: 3, title: 'Fashion Dos and Don’ts Every Woman Should Know' },
    },
    {
      id: 2,
      title: 'A Glimpse into Men’s Fashion Trends',
      content: 'Content about men’s fashion trends...',
      quote: 'Men’s fashion is timeless and constantly evolving.',
      imageUrl: require('./images/second-blog.webp'),
      date: 'August 01, 2023',
      author: 'Marino Themes',
      comments: 0,
      tags: ['Men', 'Trends', 'Summer'],
      previousPost: { id: 1, title: 'The Art of Layering' },
      nextPost: { id: 3, title: 'Fashion Dos and Don’ts Every Woman Should Know' },
    },
    {
      id: 3,
      title: 'Fashion Dos and Don’ts Every Woman Should Know',
      content: 'Important fashion tips for women...',
      quote: 'Style is a way to say who you are without having to speak.',
      imageUrl: require('./images/third-blog.webp'),
      date: 'August 01, 2023',
      author: 'Marino Themes',
      comments: 0,
      tags: ['Women', 'Trends', 'Spring'],
      previousPost: { id: 2, title: 'A Glimpse into Men’s Fashion Trends' },
      nextPost: { id: 1, title: 'The Art of Layering' },
    },
  ];
  