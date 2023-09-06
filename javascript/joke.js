//==========navigation bar

let navlink1 = document.getElementById("navlink1")
navlink1.onclick = () => {
    window.location = "./index.html"
}

let navlink2 = document.getElementById("navlink2")
navlink2.onclick = () => {
    window.location = "./joke.html"
}

let navlink3 = document.getElementById("navlink3")
navlink3.onclick = () => {
    window.location = "./light.html"
}

//=======================


let Jokes = [
    
    `I just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.`,

    `My grief counselor died. He was so good, I don’t even care.`,

    `Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.`,

    `A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”`,

    `As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.`,

    `I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.`,

    `The doctor gave me some cream for my skin rash. He said I was a sight for psoriasis.`,

    `Don’t challenge Death to a pillow fight. Unless you’re prepared for the reaper cushions.`,

    `I don’t have a carbon footprint. I just drive everywhere.`,

    `Even people who are good for nothing have the capacity to bring a smile to your face, like when you push them down the stairs.`,

    `A man walks into an enchanted forest and tries to cut down a talking tree. "You can't cut me down," the tree exclaims, "I'm a talking tree!" The man responds, "You may be a talking tree, but you l dialogue."`,

    `My mom died when we couldn’t remember her blood type. As she died, she kept telling us to “be positive,” but it’s hard without her.`,

    `What does my dad have in common with Nemo? They both can’t be found.`,

    `I visited my new friend in his apartment. He told me to make myself at home. So I threw him out. I hate having visitors.`,

    `When my Uncle Frank died, he wanted his cremations to be buried in his favorite beer mug. His last wish was to be Frank in Stein.`,

    `Do you know the phrase “One man’s trash is another man’s treasure”? Wonderful saying, horrible way to find out that you were adopted.`,

    `My husband left a note on the fridge that said, "This isn't working." I'm not sure what he's talking about. I opened the fridge door and it's working fine!`,

    `Why did the man miss the funeral? He wasn’t a mourning person.`,

    `It’s important to establish a good vocabulary. If I had known the difference between the words “antidote” and “anecdote,” one of my best friends would still be alive.`,

    `Want to know how you make any salad into a caesar salad? Stab it twenty-three times.`,

    `When I see the names of lovers engraved on a tree, I don't find it cute or romantic. I find it weird how many people take knives with them on outings.`,

    `Give a man a match, and he’ll be warm for a few hours. Set him on fire, and he will be warm for the rest of his life.`,

    `My wife is mad that I have no sense of direction. So I packed up my stuff and right.`,

    `When does a joke become a dad joke? When it leaves you and never comes back.`,

    `A priest asks the convicted murderer at the electric chair, “Do you have any last requests?” “Yes,” replies the murderer. “Can you please hold my hand?”`,

    `I just read that someone in New York gets stabbed every 52 seconds. Poor guy.`,

    `The doctor gave me one year to live, so I shot him with my gun. The judge gave me 15 years. Problem solved.`,

    `You know you’re not liked when you get handed the camera every time they take a group photo.`,

    `Where did Joe go after getting lost on a minefield? Everywhere.`,

    `What's red and bad for your teeth? A brick.`,

    `My grandfather said my generation relies too much on the latest technology. So I unplugged his life support.`,

    `My parents raised me as an only child, which really pissed off my sister.`,

    `What did the Titanic say as it sank? I’m nominating all passengers for the Ice Bucket Challenge!`,

    `Why did Mozart kill all of his chickens? When he asked them who the best composer was, they all replied, "Bach, Bach, Bach."`,

    `How many emo kids does it take to screw in a lightbulb? None, they all sit in the dark and cry.`,

    `I have a stepladder because my real ladder left when I was 5.`,

    `They laughed at my crayon drawing. I laughed at their chalk outline.`,

    `My husband and I have reached the difficult decision that we do not want children. If anybody does, please just send me your contact details and we can drop them off tomorrow.`,

    `I have many jokes about unemployed people—sadly none of them work.`,

    `The most corrupt CEOs are the ones who run pretzel companies. They’re always so twisted.`,

    `To teach kids about democracy, I let them vote on dinner. They picked tacos. Then I made pizza because they don’t live in a swing state.`,

    `I was reading a great book about an immortal cat the other day. It was impossible to put down.`,

    `You’re not completely useless. You can always be used as a bad example.`,

    `I threw a boomerang a few years ago. I now live in constant fear.`,

    `What’s the difference between a hipster and a football player? A football player showers.`,

    `I made a website for orphans. It doesn’t have a home page.`,

    `The other day, my girlfriend asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.`,

    `Why can’t Michael Jackson go within 500 meters of a school? Because he’s dead.`,

    `“I’m sorry” and “I apologize” mean the same thing. Except at a funeral.`,

    `It turns out a major new study recently found that humans eat more bananas than monkeys. But, I can’t remember the last time I ate a monkey`
]


// console.log(random_number);
// console.log(random_joke);
let random_joke
let random_number
let nexta = document.getElementById("nexta")
let joke_pre = document.getElementsByClassName("joke")[0];

random_number = Math.floor(Math.random() * 51);
random_joke = Jokes[random_number]
joke_pre.innerHTML = random_joke;

nexta.onclick = () => {
    random_number = Math.floor(Math.random() * 51);
    random_joke = Jokes[random_number]
    joke_pre.innerHTML = random_joke;
}