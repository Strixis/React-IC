class Bot {
  constructor() {}

  static getAnswer(user) {
      const author = 'Bot';
      const text = `Hello from Bot, ${ user }!`;

    return [{author, text}];
  }
};

export { Bot };
