class Bot {
  static answers = {
    'greetings': ['Hello', 'Hi', 'Hallo']
  };
  static questions = {
    greetings: /\b(hi)+|(hello)+|(hall?o)+\b/ig,
  };
  static defaultMessage = 'я тебя пока не понимаю =(';

  static getAnswer(message) {
    const author = 'Bot';

    let answerType = this._getAnswerType(message.text);

    if (!answerType) {
      return [{author, text: `${ message.author }, ${ this.defaultMessage }`}];
    }

    const answer = this.answers[answerType][
      Math.floor(Math.random() * Math.floor(this.answers.greetings.length))
    ];
    
    const text = `${ answer }, ${ message.author }!`;
  
    return [{ author, text }];
  }

  static _getAnswerType(text) {
    for (let key in this.questions) {
      this.questions[key].lastIndex = 0;
      if (this.questions[key].test(text)) {
        return key;
      }
    }
  }
};

export { Bot };
