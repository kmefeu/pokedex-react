module.exports = {
  //ignora qualquer teste contido nessas pastas
  testPathIgnorePatterns: ["/node_modules", "/.next/"],

  // arrya de arquivos pro jest execustar antes de realizar os testes
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    //indica a bliblioteca que ira converter/tranformar os asquivos com as estenções listadas para que eles sejam compreensíveis para o jest
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  // indica qual o hambientes que nossos testes serão executados para saber como o jest ira se comportar na hora de criar o html
  // criando o hambiente perfeito para simular a nossa aplicação e testar os nosso componentes
  // portanto ele cria um obejto javaScript que é um espelho da DOM
  testEnvironment: "jsdom",
};
