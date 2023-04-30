import { ProjectProps } from 'components/Project';
import { Projects as ProjectsScreen } from 'screens/Projects';

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: 'This website',
      description:
        "Douglasgoulart.com is my personal space. This is where I like to share some cool stuff I learn along my way as a software engineer. It's also where you can find some additional information about me, including all my links.",
      accomplishments: [
        'Architected, created and developed the entire application;',
        'Designed the UI from scratch on Figma;',
        'Built all the front-end components;',
        'Used Next.js API routes to integrate with external APIs like Spotify and Mailchimp;',
        'Wrote unit tests using Jest and React Testing Library;',
        'Used MDX to write customized and rich blog posts;',
        'Used Storybook to build and display UI components in isolation;',
      ],
      url: 'https://github.com/doougui/douglasgoulart.com',
      stack: [
        'TypeScript',
        'Next.js',
        'React.js',
        'Storybook',
        'Styled-Components',
        'Jest',
        'React Testing Library',
        'ESLint',
        'Prettier',
      ],
    },
    {
      title: 'Appointful',
      description:
        'Appointful is an API made in Node.js to manage dentist appointments. There you can list dentists and appointments, schedule appointments, cancel appointments and much more.',
      accomplishments: [
        'Applied design patterns such as Factory, Adapter, Composite and many more;',
        'Applied SOLID principles;',
        'Wrote unit and end-to-end tests with Vitest to assert that everything works flawlessly;',
        'Documented API routes with Swagger;',
        'Used Prisma with PostgreSQL to persist and retrieve data;',
        'Deployed both database and application to production with Render.com;',
      ],
      url: 'https://github.com/doougui/appointful',
      stack: [
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'ESLint',
        'Prettier',
        'Vitest',
        'Swagger',
      ],
    },
    {
      title: 'React Native Sortable Gallery',
      description:
        'A React Native component that allows you to sort a gallery of images. This component allows you to keep track of the order of your images and be able to organize them in an easy and performative way.',
      accomplishments: [
        'Developed the entire project;',
        'Used React Native with Expo to build the application;',
        'Used React Native Reanimated and React Native Gesture Handler to allow users to drag and drop images in a clean, performative way;',
        'Used ESLint and Prettier to ensure code quality and enforce coding standards;',
        'Used Husky and lint-staged to make sure that code standards are maintained before pushing to production;',
        'Used TypeScript to ensure type-safety;',
      ],
      url: 'https://github.com/doougui/react-native-sortable-gallery',
      stack: [
        'TypeScript',
        'React Native',
        'Expo',
        'React Native Reanimated',
        'React Native Gesture Handler',
        'ESLint',
        'Prettier',
        'Husky',
        'lint-staged',
      ],
    },
  ];

  return <ProjectsScreen projects={projects} />;
}
