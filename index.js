
function cakeRecipePage() {
    const cakePictures = [ 
        {
            cakeType : "Cheese cake",
            cakeImg : "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            cakeType : "Strebbery cake",
            cakeImg : "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            cakeType : "Chocolate cake",
            cakeImg : "https://images.pexels.com/photos/7381533/pexels-photo-7381533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];
    
    cakePictures.forEach(currCake => {
        // Creating main Div
        const mainCakeDiv = document.createElement('div');
        // Creating Img & src - cakePictures - URL
        const cakeImg = document.createElement('img');
        cakeImg.setAttribute('src', currCake.cakeImg);
         // Creating h1 - cakePictures - text
        const cakeText = document.createElement('h1');
        cakeText.textContent = currCake.cakeType; 
        // Creating p - recipe instructaion
        const cakeInstruction = document.createElement('p');
        cakeInstruction.textContent = "Recipe Instructions";
        cakeInstruction.classList.add('pInstruct')
         // Creating arrow image & add class list
        const arrowUp = document.createElement('img');
        arrowUp.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/44/44684.png");
        arrowUp.classList.add('arrow');
        const arrowDown = document.createElement('img');
        arrowDown.setAttribute('src', "https://www.svgrepo.com/show/175749/double-up-arrow.svg");
        arrowDown.classList.add('arrow', 'hdn');
        // Creating arrow image & add class list
        const addInstruction = document.createElement('p');
        addInstruction.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi cupiditate labore maiores recusandae iusto porro dolor atque. Dolorum eaque ipsum earum vitae distinctio perferendis necessitatibus eveniet quisquam ad provident.
    Molestiae velit eligendi maiores quisquam iusto eos nesciunt minima optio, autem corrupti vel culpa eum, dolorem porro debitis rem, saepe nemo id deleniti impedit natus facere qui? Dolore, nesciunt assumenda?
    Ab dolorem repudiandae quibusdam rem, quis sed nobis! Assumenda nihil hic consequuntur tenetur enim fuga harum laudantium impedit ullam accusamus quibusdam voluptas quidem maxime, commodi vitae. Sed, dicta hic. Corrupti?
    Excepturi praesentium nihil ea fuga consectetur sequi deleniti autem quibusdam neque saepe, minima reiciendis amet aperiam sint magnam consequuntur et labore voluptate est quae aspernatur aliquam, earum nobis. Deserunt, facere.
    Repellat reprehenderit sunt placeat nemo sequi, cupiditate iure sint eligendi commodi. Quis molestiae, eligendi inventore deserunt beatae facilis rem atque ut sint veritatis quas recusandae, cumque illum laudantium, ullam perferendis!`;
        addInstruction.classList.add('hdn');
        const brarrier = document.createElement('hr');
        // Child appending to the main div
        mainCakeDiv.appendChild(cakeImg);
        mainCakeDiv.appendChild(cakeText).nextSibling;
        mainCakeDiv.appendChild(cakeInstruction).nextSibling;
        mainCakeDiv.appendChild(arrowUp).nextSibling;
        mainCakeDiv.appendChild(arrowDown).nextSibling;
        mainCakeDiv.appendChild(addInstruction).nextSibling;
        mainCakeDiv.appendChild(brarrier).nextSibling;
        // Appending main div to body
        document.querySelector('body').appendChild(mainCakeDiv); 


        arrowUp.addEventListener('click', () => {
            arrowUp.classList.toggle('hdn');
            arrowDown.classList.toggle('hdn');
            addInstruction.classList.toggle('hdn');
        });
        arrowDown.addEventListener('click', () => {
            arrowUp.classList.toggle('hdn');
            arrowDown.classList.toggle('hdn');
            addInstruction.classList.toggle('hdn');
        });
    });    

}

cakeRecipePage();
