const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?\n- `, answer => {
  rl.question('What activity do you like?\n- ', answer2 => {
    rl.question('What do you listen to while doing that?\n- ', answer3 => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?\n- ', answer4 => {
        rl.question(`What's your favourite thing to eat for that meal?\n- `, answer5 => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n- ', answer6 => {
            console.log(
              `\nGreat, thanks ${answer}! So, here is your generated profile:\n\n${answer} likes ${answer2} while listening to ${answer3}.\n${answer}'s favourite meal is ${answer4}, and especially when there's ${answer5}.\n${answer} is amazing at ${answer6}.`
            );
            rl.close();
          });
        });
      });
    });
  });
});
