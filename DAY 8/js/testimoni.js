const TestimoniData = [
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSMpvXdddZYkMFBlu8ybkbysFHD6f4-59zA6IYpa0kQDql1B4v",
      content: "where are you now?",
      author: "Alan Walker",
      rating: 5,
    },
    {
      image:
        "https://seputarpangandaran.com/wp-content/uploads/2023/06/6b900629057be14f9aac7e6a535625cc.jpg",
      content: "Takut dewasa",
      author: "idgitaf",
      rating: 4,
    },
    {
      image:
        "https://asset.kompas.com/crops/LlT_wYB6eOd91rzrCxWowX12IfY=/0x28:467x339/750x500/data/photo/2021/08/18/611c758ff398a.png",
      content: "Kita di bagian bumi terindah",
      author: "Alffy Rav",
      rating: 1,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwGMk47lV131EmDW8R44UAeOMvZqPtw5vMA&s",
      content: "happier",
      author: "Marsmello",
      rating: 2,
    },
    {
      image:
        "https://mmc.tirto.id/image/2017/12/27/babymetal--babymetalnet.jpg",
      content: "bum bum bum",
      author: "Baby Metal",
      rating: 5,
    },
  ];
  
  function html(item) {
    return `
      <div class="testimonial">
          <img src="${item.image}" alt="testimonial" class="profile-testimonial">
              <p class="quote">${item.content}</p>
              <p class="author">- ${item.author}</p>
              <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>`;
  }
  
  function allTestimonial() {
    let testimonialHtml = ``;
    TestimoniData.forEach((item) => {
      testimonialHtml += html(item);
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHtml;
  }
  
  allTestimonial();
  
  function filterTestimonials(rating) {
    let testimonialHtml = ``;
    const testimonialFilter = TestimoniData.filter((item) => {
      return item.rating === rating;
    });
  
    if (testimonialFilter.length === 0) {
      testimonialHtml = `<h1> Data not found!</h1>`;
    } else {
      testimonialFilter.forEach((item) => {
        testimonialHtml += html(item);
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHtml;
  }