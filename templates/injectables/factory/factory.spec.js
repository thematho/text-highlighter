import {{ dashCase name }} from './{{ dashCase name }}.factory'

describe('Factory: {{ dashCase name }}', () => {
  let factory;

  // Modules import
  beforeEach(() => {
    factory = {{ dashCase name }};
  });

  it('should create a {{ dashCase name }}Service [REMOVE]' , () => {
    let service = factory();
      expect(service).toHavePropertygetName');
      expect(service.getName()).toEquals('{{ properCase name }}Service');
  });
});

