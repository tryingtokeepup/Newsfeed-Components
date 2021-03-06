// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    //this.expandArticlePoop = this.article.querySelector('.article');
    console.log(this.expandArticlePoop);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
   
    this.expandButton.textContent = "Thank you very much Daniel for helping me";
    console.log(this.expandButton.textContent);
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    // this.expandButton.addEventListener('click', this.expandArticle.bind(this)); //pretty sure this works, this is ES5
    // lets try something way more modern, ES6 arrow syntax
    this.expandButton.addEventListener('click', () => this.expandArticle());
      
    //this.expandArticlePoop.addEventListener('mouseenter', () => this.expandArticle());
    //his.expandArticlePoop.addEventListener('mouseleave', () => this.expandArticle());
    //this.closeArticle.addEventListener('mouseleave', () => this.closeArticleMega());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open'); 

  }
}
//   closeArticleMega() {
//     this.article.classList.toggle('article-open');
//   }
// }

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".article");

// // try something insane
// window.addEventListener('click', () => {
//   if ((event.target.classList.contains('expandButton') || event.target.classList.contains('article')) == false) {
//     for (let i = 0; i<articles.length; i++) {
//       if (articles[i].article.classList.contains('article-open')) {
//         articles[i].article.classList.toggle('article-open');
//         articles[i].expandButton.forEach((button) => button.textContent = 'expand');
//       }
//     }  
//   }
// })

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});
