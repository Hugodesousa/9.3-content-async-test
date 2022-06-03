require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica nome do personagem', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman')
  });
  it('Verifica o erro caso a função não receba parametro', async () => {
    const failRequest = await fetchCharacter();
    console.log(failRequest)
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('qlq');
    
    expect(response).toBe('Invalid id')
  });
});