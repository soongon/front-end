
// Javascript Object Notation (JSON)
var firstArticle = {
    articleId: 1,
    title: 'hello',
    content: '안녕하세요 첫번째 글입니다.',
    likes: 3,
    reply: [
        {
            author: 'kim',
            content: '악성댓글'
        },
        {
            author: 'lee',
            content: 'hi'
        },
        {
            author: 'park',
            content: 'good morning'
        }
    ]
};
document.getElementById('title').innerText = firstArticle.title;
document.getElementById('content').innerText = firstArticle.content;
document.getElementById('likes').innerText = firstArticle.likes;
document.getElementById('reply-content').innerText = firstArticle.reply[1].content;

console.log(typeof firstArticle);
console.log(firstArticle);


var product = {
    prodId: 1,
    title: 'abcd',
    stock: 5,
    buy: function () {
        this.stock = this.stock - 1;
    }
};

console.log(product.stock);
product.buy();
console.log(product.stock);






