let dataBlog = [];

function addBlog(event){
    event.preventDefault()

    let inputblogName = document.getElementById("blog-name").value;
    let inputStartDate = document.getElementById("date-start").value;
    let inputEndDate = document.getElementById("date-end").value;
    let inputCheckbox = document.getElementsByName("inputCheck").value;
    let inputBlogDesc = document.getElementById("blog-description").value;
    let inputUploadImage = document.getElementById("upload-image").files[0];

    inputUploadImage = URL.createObjectURL(inputUploadImage);

    let blog = {

            inputblogName,
            inputStartDate,
            inputEndDate,
            inputBlogDesc,
            inputCheckbox,
            inputUploadImage,
            postAt: new Date(),
            author: "Try Widodo Putra"
        }

        dataBlog.push(blog);
        console.log(dataBlog)
        renderBlog()
    }

// displaying blog
function renderBlog() {

    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML +=`
        <article class="blog-item">
                    <img src="${dataBlog[index].inputUploadImage}" alt="">
                    <div class="blog-name">
                    <h3>
                        <a href="blog-detail.html" target="_blank">
                            ${dataBlog[index].inputblogName}
                        </a>
                    </h3>
                        <div class="blog-duration">
                            <p><b>Start Date:</b> 10 October 2022</p>
                            <p><b>End Date:</b> 28 October 2022</p>
                        </div>
                    </div>
                    <div class="blog-description">
                        <p>
                          ${dataBlog[index].inputBlogDesc}
                        </p>
                        <div class="blog-tech-info">
                            <img src="./assets/icons/nodejs.svg">
                            <img src="./assets/icons/react-native.svg">
                            <img src="./assets/icons/nextjs.svg">
                            <img src="./assets/icons/typescript.svg">
                        </div>
                    </div>
                    <div class="action-btn">
                        <button class="btn btn-primary">edit</button>
                        <button class="btn btn-white">delete</button>
                    </div>
                </article>
        `
        
    }
}