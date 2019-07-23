/**
 * Bob
 *
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * Bob answers 'Sure.' if you ask him a question.
 *
 * He answers 'Whoa, chill out!' if you yell at him.
 *
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 *
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 *
 * He answers 'Whatever.' to anything else.
 */

const hey = message => {
  const isUpperCase = string => /^[A-Z \%\^\*\@\#\$\(\*\^0-1]*$/.test(string);

  message = message.trim();

  let lastChar = message[message.length - 1];
  let isYelling = isUpperCase(message.slice(0, -1));
  let isYelling2 = isUpperCase(message.slice(-2, -1));

  if (message == "") {
    return "Fine. Be that way!";
  } else if (isYelling && lastChar == "?") {
    return "Calm down, I know what I'm doing!";
  } else if (isYelling || (isYelling2 && lastChar == "!")) {
    return "Whoa, chill out!";
  } else if (lastChar == "?") {
    return "Sure.";
  } else return "Whatever.";
};

module.exports = hey;
