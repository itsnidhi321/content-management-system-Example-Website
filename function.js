function head(title){
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="head">
            <a href="#">${title}</a>
            </div>`);
}
function nav(){
    document.write(`<div class="nav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="page1.html">Html</a></li>
        <li><a href="page2.html">Css</a></li>
        <li><a href="page3.html">Javascript</a></li>
        <li><a href="page4.html">React</a></li>
    </ul>
</div>`);
}

function post(count){
    let x=1;
    do{
    document.write(` 
    <div class="article">
    <h1>Article Heading</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nobis? Ea assumenda, repudiandae aut nisi, totam fugit dolorem odio eum minus ipsa ex, voluptas molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit cupiditate! Cupiditate ut fugit illum labore odio pariatur, provident quibusdam vitae, numquam, aliquid animi sunt non perferendis impedit eaque minus? Provident ducimus expedita impedit voluptatem necessitatibus vitae nobis, eaque veniam nihil blanditiis repellendus sint maxime, natus quae dolorum amet aliquam. At illum amet quae dolorum id. Sunt quae, nostrum ipsa hic ea odit voluptas porro expedita similique dignissimos? Ab tenetur blanditiis velit mollitia. Tempora asperiores est sequi quod, officiis harum incidunt quia ut magni nesciunt deserunt cum illum unde autem iusto nemo sed quidem. Dolorem, aperiam veritatis modi atque quis quaerat cumque illo adipisci, a quod quidem odio quo repudiandae dolores officiis eius quibusdam ad soluta aut obcaecati ducimus perferendis, laudantium delectus. Recusandae voluptatibus suscipit dolorem quis. Alias sint nisi ullam reprehenderit placeat eum unde. Labore numquam nobis, corrupti facere aliquam rem ratione assumenda accusamus atque? Dolores nulla atque, ullam praesentium qui quam facere eaque voluptatem enim laborum quae sit reiciendis ut. Dolorem autem pariatur quam iusto eaque sed et eveniet fugiat consectetur! Cumque dolor eum culpa earum dolore. Est atque, delectus tenetur ducimus error in tempora. Ratione provident ea excepturi cupiditate fuga iusto nemo, sed aliquid nihil saepe, minima sint unde placeat reprehenderit maiores dolores? Placeat aut sunt excepturi nesciunt, veniam quasi eligendi pariatur deleniti quis ex. Laboriosam sint autem dolor at dicta ipsum illum! Ullam maxime quaerat, porro perspiciatis a tempora numquam enim, nam libero saepe cum. Sapiente explicabo dolores voluptates vero, fugit debitis accusamus eius placeat sunt.</p>
    </div>`);
    x++;
    }
    while(x<=count);
}
function footer(){
    document.write(`<div class="footer">
    <h4>copyright &copy;2024</h4></div>
    </body>
    </html>`);
}
