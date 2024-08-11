document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts").then((res) => {
    res.json().then((data) => {
      data?.map((data) => {
        const titleElement = document.createElement("h3");
        const bodyElement = document.createElement("p");
        
        titleElement.innerText = data.title;
        bodyElement.innerText = data.body;

        const postElement = document
          .createElement("article")

        postElement.classList.add('post');
        postElement.append(titleElement, bodyElement);        

       const postContainer =  document.getElementsByClassName('postContainer')[0];
       postContainer.appendChild(postElement);
      });
    });
  });
});
