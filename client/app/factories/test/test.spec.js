import test from './test.factory'

describe('Factory: test', () => {
  let factory;

  // Modules import
  beforeEach(() => {
    factory = test;
  });

  it('should create a testService [REMOVE]' , () => {
    let service = factory();
      expect(service).to.have.property('getName');
      expect(service.getName()).to.be.equals('TestService');
  });
});

