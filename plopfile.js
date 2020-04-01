module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
      description: 'Component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name please'
        },
        {
          type: 'input',
          name: 'author',
          message: 'your name please'
        },
        {
          type: 'input',
          name: 'description',
          message: 'component description (will be useful for your co-devs)',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'components/{{name}}/{{name}}.js',
          templateFile: 'templates/component.hbs'
        },
        {
          type: 'add',
          path: 'components/{{name}}/{{name}}.styleguide.js',
          templateFile: 'templates/component-styleguide.hbs'
        },
      ]
  });
};
