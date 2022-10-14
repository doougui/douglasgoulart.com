module.exports = (plop) => {
  // component generator
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('context', {
    description: 'Create a react context file',
    prompts: [
      {
        type: 'input',
        name: 'contextName',
        message: 'What is your context name (ex: NameContext)?',
      },
    ],
    actions(data) {
      const actions = [];

      const name = data.contextName.replace('Context', '');

      actions.push({
        type: 'add',
        path: `../src/contexts/{{pascalCase contextName}}.tsx`,
        templateFile: 'templates/context/[context].tsx.hbs',
        data: { name },
      });

      return actions;
    },
  });

  plop.setGenerator('layout', {
    description: 'Create a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/layouts/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/layout/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/layouts/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/layout/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/layouts/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/layout/test.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a next page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}.tsx',
        templateFile: 'templates/page/index.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/screen/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/screen/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/screen/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/screen/test.tsx.hbs',
      },
    ],
  });
};
