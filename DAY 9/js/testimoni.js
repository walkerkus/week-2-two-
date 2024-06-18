

const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  

  xhr.open("GET", "https://api.npoint.io/8794a8d90efa26b96ce1", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Erorr Loaded Data");
    }
  };

  xhr.onerror = function () {
    reject("404 Not Found");
  
  };

  xhr.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;
    
    let testimonialHtml = ``;

    response.forEach((item) => {
      testimonialHtml += `
      <div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialHtml;

  } catch (error) {
    console.log(error);
  }
}

allTestimonial();

async function filterTestimonials(rating) {
  try {
    const response = await testimonial;
    let testimonialHtml = ``;

    const dataFilter = response.filter((data) => data.rating === rating);
    if (dataFilter.length === 0) {
      testimonialHtml = `<h1> Data not found!</h1>`;
    } else {
      dataFilter.forEach((item) => {
        testimonialHtml += `<div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>`;
      });
    }

    document.getElementById("testimonials").innerHTML = testimonialHtml;
  } catch (error) {
    console.log(error);
  }
}