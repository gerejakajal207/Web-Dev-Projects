// Like/Dislike Logic
document.addEventListener("click", e => {
  if (e.target.classList.contains("like")) {
    let count = parseInt(e.target.getAttribute("data-count")) + 1;
    e.target.setAttribute("data-count", count);
    e.target.nextElementSibling.textContent = count;
  }

  if (e.target.classList.contains("dislike")) {
    let count = parseInt(e.target.getAttribute("data-count")) + 1;
    e.target.setAttribute("data-count", count);
    e.target.nextElementSibling.textContent = count;
  }

  if (e.target.classList.contains("delete")) {
    const card = e.target.closest(".res");
    const blog = card.previousElementSibling;
    blog.remove();
    card.remove();
  }
});

// Add Blog Logic
document.getElementById("blogForm").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const blogContainer = document.getElementById("blogContainer");

  const blogCard = document.createElement("div");
  blogCard.classList.add("blog-card");
  blogCard.innerHTML = `
    <div class="blog-content">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
    <div class="blog-image">
      <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" alt="Blog">
    </div>
  `;

  const resDiv = document.createElement("div");
  resDiv.classList.add("res");
  resDiv.innerHTML = `
    <i class="fa-solid fa-thumbs-up fa-2x like" data-count="0"></i>
    <span class="like-count">0</span>
    <i class="fa-solid fa-thumbs-down fa-2x dislike" data-count="0"></i>
    <span class="dislike-count">0</span>
    <i class="fa-regular fa-comment fa-2x comment"></i>
    <i class="fa-solid fa-arrow-up-right-from-square fa-2x share"></i>
    <i class="fa-solid fa-trash fa-2x delete"></i>
  `;

  blogContainer.appendChild(blogCard);
  blogContainer.appendChild(resDiv);

  document.getElementById("blogForm").reset();
});
