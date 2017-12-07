let required = require('../plop.validations');

module.exports = (plop) => {
  return {
    description: 'Create a new service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is name of new service?',
        validate: required('name'),
    },
      {
        type: 'confirm',
        name: 'needPath',
        message: 'Place new service in a different directory than the services directory? (Enter to use default directory)',
        default: false,
    },
      {
        type: 'directory',
        name: 'path',
        message: 'Where to put new service?',
        basePath: './client/app',
        default: '',
        when: (answers) => answers.needPath,
    }
  ],
    actions: () => {
      plop.addPartial('path', '{{#if path}}{{ path }}/{{else}}services/{{/if}}{{ dashCase name }}');
      plop.addPartial('fullPath', './client/app/{{> path}}');

      return [
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.js',
          templateFile: './templates/injectables/service/service.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.service.js',
          templateFile: './templates/injectables/service/service.service.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.spec.js',
          templateFile: './templates/injectables/service/service.spec.js',
          abortOnFail: true,
      },
    ]
    }
  };
}
