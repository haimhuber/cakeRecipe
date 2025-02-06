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
    ];

    cakePictures.forEach(currCake => {
        const mainCakeDiv = document.createElement('div');
        const cakeImg = document.createElement('img');
        cakeImg.setAttribute('src', currCake.cakeImg);
        const cakeText = document.createElement('h1');
        cakeText.textContent = currCake.cakeType; 
        const cakeInstruction = document.createElement('p');
        cakeInstruction.textContent = "Recipe Instructions";
        const arrow = document.createElement('img');
        arrow.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/44/44684.png");
        arrow.classList.add('arrow');
        const addInstruction = document.createElement('h3');
        addInstruction.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi cupiditate labore maiores recusandae iusto porro dolor atque. Dolorum eaque ipsum earum vitae distinctio perferendis necessitatibus eveniet quisquam ad provident.
    Molestiae velit eligendi maiores quisquam iusto eos nesciunt minima optio, autem corrupti vel culpa eum, dolorem porro debitis rem, saepe nemo id deleniti impedit natus facere qui? Dolore, nesciunt assumenda?
    Ab dolorem repudiandae quibusdam rem, quis sed nobis! Assumenda nihil hic consequuntur tenetur enim fuga harum laudantium impedit ullam accusamus quibusdam voluptas quidem maxime, commodi vitae. Sed, dicta hic. Corrupti?
    Excepturi praesentium nihil ea fuga consectetur sequi deleniti autem quibusdam neque saepe, minima reiciendis amet aperiam sint magnam consequuntur et labore voluptate est quae aspernatur aliquam, earum nobis. Deserunt, facere.
    Repellat reprehenderit sunt placeat nemo sequi, cupiditate iure sint eligendi commodi. Quis molestiae, eligendi inventore deserunt beatae facilis rem atque ut sint veritatis quas recusandae, cumque illum laudantium, ullam perferendis!`;
        addInstruction.classList.add('hdn');
        const brarrier = document.createElement('hr');
        mainCakeDiv.appendChild(cakeImg);
        mainCakeDiv.appendChild(cakeText).nextSibling;
        mainCakeDiv.appendChild(cakeInstruction).nextSibling;
        mainCakeDiv.appendChild(arrow).nextSibling;
        mainCakeDiv.appendChild(addInstruction).nextSibling;
        mainCakeDiv.appendChild(brarrier).nextSibling;
        document.querySelector('body').appendChild(mainCakeDiv); 


        arrow.addEventListener('click', () => {
            addInstruction.classList.toggle('hdn');
            
        });
    });    

}

cakeRecipePage();
