class Bot {
  static user = ''

  static getAnswer(message) {
    this.user = message.author;
    
    const author = 'Bot';
    let text = this._getDefaultMessage();
    const answers = this._getKnowledge();

    for (let [key, value] of answers) {
      key.lastIndex = 0;
      if (key.test(message.text)) {
        text = value[Math.floor(Math.random() * Math.floor(value.length))];
        return { author, text };
      }
    }
    return { author, text };
  }

  static _getDefaultMessage() {
    return `${ this.user }, я тебя пока не понимаю =(`;
  }

  static _getKnowledge() {
    return new Map([
      [
        /\b(hi)+|(hello)+|(hall?o)+\b/ig,
        [
          `Hello, ${ this.user }.`,
          `Hi, ${ this.user }!`,
          `Hallo, ${ this.user }!`
        ]
      ],
      [
        /123/,
        [
          `Один, два, три ${ this.user } =)`,
          `1, 2, 3 и ${ this.user }!`,
          `Три, два, один!`
        ]
      ]
    ]);
  }
};

export { Bot };
