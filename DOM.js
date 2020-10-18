const main = document.querySelector('main');
const Myjokes="My Jokes";
var joke1 ='Why was Cinderella so bad at soccer? She kept running away from the ball!'
var joke2 = 'What do you call a pig that does karate? A Pork Chop.'
var joke3 = 'Why wont the shrimp share his treasure? He is a little Shellfish.'
const template = `
<section>
<h1>${Myjokes}</h1>
<li>${joke1}</li>
<li>${joke2}</li>
<li>${joke3}</li>
</section>
`;
const p = document.createElement('p')
p.textContent = 'Thats All Folks!'

main.innerHTML= template
main.appendChild(p)