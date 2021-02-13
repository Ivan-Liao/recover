import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import v4 from "../../node_modules/uuid/dist/v4.js";


const ColorButton = withStyles((theme) => ({
  root: {
    padding: "2rem",
    fontSize: "2rem",
    color: "#FFF",
    backgroundColor: "#76BCF5",
    "&:hover": {
      backgroundColor: "#3B5A75",
    },
  },
}))(Button);

function Action (props) {
  const saveButtonHandler = () => {
    props.setHistory([
      ...props.history,
      {
        id: v4(),
        timestamp: new Date(Date.now()).toString(),
        feelings: props.selectedFeelingsList,
        plans: props.plans,
      }
    ])
    localStorage.setItem("history", JSON.stringify(props.history));
  }

  return (
    <React.Fragment>
      <p className="breathe-text">Put Your Plan into Action</p>
      <ColorButton onClick={saveButtonHandler}>Save to History</ColorButton>
      <p className="quote">
        {quoteList[Math.floor(Math.random() * Math.floor(quoteList.length))]}
      </p>
    </React.Fragment>
  );
}

const quoteList = [
  " The difference between stupidity and genius is that genius has its limits. - Albert Einstein ",
  " Nothing is impossible, the word itself says, “I’m possible! - Audrey Hepburn ",
  " The question isn’t who is going to let me; it’s who is going to stop me. - Ayn Rand ",
  " Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared. - Buddha ",
  " Remember no one can make you feel inferior without your consent. - Eleanor Roosevelt ",
  " The cure for boredom is curiosity. There is no cure for curiosity. - Ellen Parr ",
  " I attribute my success to this: I never gave or took any excuse. - Florence Nightingale ",
  " A mind is like a parachute. It doesn't work if it is not open. - Frank Zappa ",
  " Time flies like an arrow; fruit flies like a banana. - Groucho Marx ",
  " Whether you think you can or think you can't, you're right. - Henry Ford ",
  " Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes.  - Jack Handey ",
  " The elevator to success is out of order. You'll have to use the stairs... one step at a time. - Joe Girard ",
  " When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.  - John Lennon ",
  " It’s okay to be scared. Being scared means you’re about to do something really, really, brave. - Mandy Hale ",
  " I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou ",
  " Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou ",
  " If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.  - Oprah Winfrey ",
  " What lies behind you and what lies in front of you, pales in comparison to what lies inside of you - Ralph Waldo Emerson ",
  " Somewhere on this globe, every ten seconds, there is a woman giving birth to a child. She must be found and stopped. - Sam Levenson ",
  " Your time is limited, so don't waste it loving someone else's life - Steve Jobs ",
  " When you fall, I will be there to catch you - The Ground ",
  " When you're at the end of your rope, tie a knot and hold on. - Theodore Roosevelt ",
  " Holding onto anger is like drinking poison and expecting the other person to die. - Unknown ",
  " Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching - Unknown ",
  " Some people are like clouds. When they go away, it's a brighter day. - Unknown ",
  " Silence is golden, unless there are kids, then silence is just plain suspicious. - Unknown ",
  " My prince is not coming on a white horse... He's obviously riding a giant tortoise and definitely lost. - Unknown ",
  " They say \"don't try this at home\" so I'm coming over to your house to try it. - Unknown ",
  " Sometimes I wish I was an octopus, so I could slap eight people at once. - Unknown ",
  " Dear Math, please grow up and solve your own problems, I'm tired of solving them for you. - Unknown ",
  " My boyfriend told me I had to stop acting like a flamingo. So I had to put my foot down. - Unknown ",
  " I don't know how to act my age because I've never been this old before.  - Unknown ",
  " Don't mess with me, I know Karate, Judo, Jujitsu, Kung Fu and 20 other dangerous words. - Unknown ",
  " Sometime you can't see yourself clearly until you ask others how they see you. - Unknown ",
  " Your imperfections are puzzle pieces.  Love the whole picture. - Unknown ",
  " We're not shy. We just hold back our awesomeness so others aren't intimidated - Unknown ",
  " When hurting other's feelings make sure to apologize for being mean, awful, and accurate - Unknown ",
  " Is ugh an emotion? Cause I feel it all the time. - Unknown ",
  " What doesn't kill you gives you unhealthy coping mechanisms and a really dark sense of humor - Unknown ",
  " It's not whether you get knocked down.  It's whether you get up. - Vince Lombardi ",
  " Keep your face always toward the sunshine - and shadows will fall behind you - Walt Whitman ",
  " People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. - Zig Ziglar ",
];

export default Action;