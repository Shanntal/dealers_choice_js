const express = require('express');
//const path = require('path');
//const morgan = require('morgan');
const app = express();

app.use(express.static('./public'));   
//sending files to your browers for access  
// app.use is the middleware saying "any requests must pass by here"   
//style.css is in a folder to be able to use the express.static (since express.static is meant only for folders)



app.get("/", (req, res) => res.send(`
    <html>
    <head><link href='style.css' rel='stylesheet' type='text/css'> </head>
    <header><b>Some of Shanntal's Favorite Things:</b></header>
    <nav>
            <a href='/'>Home</a>
    </nav>
    <body>
        <ul>
            <li><a href='/epitaph'>Poem: Epitaph</a></li>
            <li><a href='/dinner'>Dinner: Lasagna</a></li>
            <li><a href='/theBlindSide'>Movie: The Blind Side</a></li>
        </ul>
    </body>
    </html>
`)
);

app.get("/epitaph", (req, res) => res.send(`
      <html>
      <head><link href='style.css' rel='stylesheet' type='text/css'> </head>
      <body>
      <nav>
            <a href='/'>Home</a>
        </nav>
        <h1>Epitaph</h1>
        <p><i>-Merrit Malloy</i></p>
        <br>
        <div>
        <p>When I die</P
        <p>Give what’s left of me away</p>
        <p> To children</p>
        <p>And old me that wait to die.</p>
        <br>
        <p>And if you need to cry,</p>
        <p>Cry for your brother</p>
        <p>Walking the street beside you.</p>
        <p>And when you need me,</p>
        <p>Put your arms</p>
        <p>Around anyone</p>
        <p>And give them</p>
        <p>What you need to give to me.</p>
        <br>
        <p>I want to leave you something,</p>
        <p> Something better</p>
        <p>Than words</p>
        <p>Or sounds.</p>
        <br>
        <p>Look for me</p>
        <p>In the people I’ve known</p>
        <p>Or loved,</p>
        <p>And if you cannot give me away,</p>
        <p>At least let me live on in your eyes</p>
        <p>And not your mind.</p>
        <br>
        <p>You can love me most</p>
        <p>By letting</p>
        <p>Hands touch hands,</p>
        <p>By letting bodies touch bodies,</p>
        <p>And by letting go</p>
        <p>Of children</p>
        <p>That need to be free.</p>
        <br>
        <p>Love doesn’t die,</p>
        <p>People do.</p>
        <p>So, when all that’s left of me</p>
        <p>Is love,</p>
        <p>Give me away.</p>
        </div>
      </body>
      </html>
    `)
);

app.get("/dinner", (req, res) => res.send(`
      <html>
      <head><link href='style.css' rel='stylesheet' type='text/css'> </head>
      <nav>
            <a href='/'>Home</a>
      </nav>
      <body>
        <h1>Lasagna!</h1>
        <h3>Recipe</h3>
        <p>Ingredients:
            <ul>
                <li>9 strips of lasagna pasta</li>
                <li>1 whole container of Ragu Meat sauce</li>
                <li>1 whole container of Pollo ricoda cheese</li>
                <li>1 bag of Pollo shredded mozzarella cheese/li>
                <li>1lb of ground beef</li>
                <li>Adobo seasoning</li>
                <li>Garlic seasoning</li>
                <li>Onion seasoning</li>
            </ul>
        </p>
        <p>Instructions:
            <ul>
                <li>Boil water in a tall pot, add 1tsp of salt and 2tsp of olive oil to the boiling water. Cook the pasta until Al Dente.</li>
                <li>Drain pasta in cold water with a colander when ready.</li>
                <li>Pre-heat oven at 350 degrees fahrenheit.</li>
                <li>While pasta is boiling season beef to taste with all your seasonings.</li>
                <li>In a large pan add a little oil and cook all the beef on medium to high heat.</li>
                <li>In a large pyrax layer 3 strips of lasagna next to each other. Spread 1/3 of the beef over the pasta. Scoop 1/3 of the ricotta cheese and place it over the beef in rows of spoonfuls. Pour 1/3 of the Ragu sauce in 3 rows over the ricotta cheese. <b>Repeat until you have 3 layers of pasta and 3 layers of toppings.</b> At the top there should be no pasta. Spread the whole bag of shredded cheese on the top making sure to cover everything!</li>
                <li>Bake lasagna for 15-20mins or until the cheese is melted on top</li>
            </ul>
        </p>
        <h3>ENJOY!!!</h3>
      </body>
      </html>
    `)
);

app.get("/theBlindSide", (req, res) => res.send(`
      <html>
      <nav>
            <a href='/'>Home</a>
      </nav>
      <body>
        <h1>The Blind Side</h1>
        
        <h3>Brief Summary</h3>
        <p>In the movie The Blind Side, is based on a true story in which Michael Oher is a homeless black young adult who is offered a place to stay the night by the Tuohys, an event that changes all their lives forever. One night Michael is walking to the gym to get out of the rain when Leigh Anne Tuohy, her husband Sean and her youngest son SJ drive by him. Once Leigh Anne notices that Michael does not have anywhere to stay she invites him to stay the night at their home. From then on he continues to stay at their home and Leigh Anne and Sean become his legal guardians making SJ his brother and Collins his sister. He is enrolled in Wingate high school, is hired a tutor, and starts playing football. The movie captures a young black man’s struggle in the world and a white family’s decision to give him a loving home.</p>

        <h3>Social Psychology</h3>

        <p>
        Present throughout the movie is social psychology.  To understand others we form attitudes towards people and many times people believe stereotypes in their “understandings.” Stereotypes are overgeneralized beliefs of members of groups and create prejudice, a generalized attitude toward people of a specific group. In the richer part of Memphis, Tennessee Michael is seen as a threat to most residents because he is a large black man. The first night Michael sleeps at the Tuohy home, Sean asks Leigh Anne if Michael might steal something, stereotyping Michael as a thug. Michael is also stereotyped as a thug when one of Leigh Anne’s friends asks her is she is worried for Collins because she shares her home with a, “… large black boy.” The woman believes there is a chance Michael will do Collins some harm not because might be a bad person but because being a black man might mean he is more inclined to hurt her, for example, sexual assault.  
        Prejudice is also present among the residents of the higher economic class of Memphis through racism. This is evident through a demonstration of discrimination when a player from an opposing football team kicks Michael’s head during one of the games saying, “You black piece of crap,” the white player uses Michael’s race to insult him believing that he is better than him not only in football but by the color of his skin. Also discriminating against Michael is the white player’s father when he yells, “… kicking that blue gun’s ass.” And a final sign of discrimination in this scene was when the referee penalizes the Wingate team when its coach stands up for Michael and when Michael blocks the same player who kicked his head, both times Michael has done nothing wrong to be penalized but is anyways by the white male coaches. 
        Leigh Anne truly demonstrates altruism when she invites Michael to stay at her family’s home although she does not know him or anything about him. She helps him not expecting anything in return. When Sean and Leigh Anne offer to be his legal guardians and ask if he wants to be part of their family, they do not expect Michael to so anything for them. They welcome him to the family and give him a permanent home out of love and selflessness. However this is challenged when Joyce Thompson, a NCAA employee hired to investigate whether Sean and Leigh Anne adopted Michael, treated him well, hired him a tutor, etc. so that he can play college for the University of Mississippi, where they attended.  Another example is when Michael protects SJ from the airbag when they get into a car accident. Had Michael not stuck out his arm across SJ, his little brother would probably have suffered from a, “broken neck, fractured face, maybe worse” (Paramedic from the film). Michael put himself in more danger by helping SJ, but in the scene he does not show any concern for himself and only cares about SJ’s well being.
        </p>

        <h3>A Great Film</h3>
        <p>In my opinion, the Blind Side is a great film that will be beneficial for a future Psychological in class movie or movie night. In addition to social psychology, the film includes the social identity aspect development psychology where Michael turns from Big Mike, a name he does not like but is often referred to as, into Michael/Mike. Topics such as learning and behavior are covered through Michael’s academic journey when he struggles in a traditional classroom setting. Emotion and motivation are presented through Michael’s tragic past. The topic of personality is also present through The Self, etc. Overall, you can find many of the topics we covered in our psychology class in this film and the story will surely make you cry.</p>

      </body>
      </html>
    `)
);

const port = 3000;

app.listen(port, () => 
    console.log(`Listening on PORT ${port}`));

