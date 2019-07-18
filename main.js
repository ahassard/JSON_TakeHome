
/*Default PreLoad of Engish version of JSON Data*/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(xhttp.responseText);

        
        /*-------------------------------------------------------------------*/ 
        /* HEADING from JSON to HTML*/
        var title = response.heading;
        document.getElementById("heading").innerHTML = title;
        
        /*-------------------------------------------------------------------*/
        /* DESCRIPTION from JSON to HTML*/
        var summary = response.description;
        document.getElementById("description").innerHTML = summary;


        /*-------------------------------------------------------------------*/
        /*pulling video  --- log to console, come back to find a way to pull to HTML*/
        var video = response.video;
        console.log(video);

        /*-------------------------------------------------------------------*/
        /*pulling SNIPPETS from JSON seperately and inserting into HTML*/
        var snip1 = response.snippets[0];
        document.getElementById("snippet1").innerHTML = snip1;
        var snip2 = response.snippets[1];
        document.getElementById("snippet2").innerHTML = snip2;
        var snip3 = response.snippets[2]
        document.getElementById("snippet3").innerHTML = snip3;

        /*-------------------------------------------------------------------*/
        /*pulling LOCATIONS from JSON seperately and inserting into HTML*/
        var loc1 = response.locations[0];
        document.getElementById("location1").innerHTML = loc1;
        var loc2 = response.locations[1];
        document.getElementById("location2").innerHTML = loc2;
        var loc3 = response.locations[2];
        document.getElementById("location3").innerHTML = loc3;
        var loc4 = response.locations[3];
        document.getElementById("location4").innerHTML = loc4;
        var loc5 = response.locations[4];
        document.getElementById("location5").innerHTML = loc5;

        /*-------------------------------------------------------------------*/
        /*template for images*/
        function imageTemplate(gallery) {
        return `
        <div class="images">
        <img src="${gallery.src}"><br>
        <h3 class="imageText">${gallery.text}</h3>
        </div>
        `
        }    
        /*using map and join to recreate arrays and pull template from above*/
        var gallery = response.gallery;
        document.getElementById("images").innerHTML = `
        ${gallery.map(imageTemplate).join('')}
        `


        /*-------------------------------------------------------------------*/
        /*template for episode array*/
        function episodeTemplate(episodes) {
        return `
            <div class="season">
                <h3>Season: ${episodes.season}</h3>
                <h5> ${episodes.name}</h5>
                    <ul> Rating: ${episodes.rating}</ul>
            </div>
              ` 
        }    
        /*use map and join to recreate arrays pulling template created above */
        var episodes = response.episode;
        document.getElementById("eps").innerHTML = `
        <h3 class="ep-results">Episode List (${episodes.length} results)</h3>
        ${episodes.map(episodeTemplate).join('')}
        `
        
 
    }
};

xhttp.open("GET", "/en_US.json", true);
xhttp.send();

/*-------------------------------------------------------------------*/
/*Selector of Engish version of JSON Data*/
function loadEng() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        
        var response = JSON.parse(xhttp.responseText);
        
        /*-------------------------------------------------------------------*/
        /* HEADING from JSON to HTML*/
        var title = response.heading;
        document.getElementById("heading").innerHTML = title;

        /*-------------------------------------------------------------------*/
        /* DESCRIPTION from JSON to HTML*/
        var summary = response.description;
        document.getElementById("description").innerHTML = summary;


        /*-------------------------------------------------------------------*/
        /*pulling video  --- log to console, come back to find a way to pull to HTML*/
        var video = response.video;
        console.log(video);

        /*-------------------------------------------------------------------*/
        /*pulling SNIPPETS from JSON seperately and inserting into HTML*/
        var snip1 = response.snippets[0];
        document.getElementById("snippet1").innerHTML = snip1;
        var snip2 = response.snippets[1];
        document.getElementById("snippet2").innerHTML = snip2;
        var snip3 = response.snippets[2]
        document.getElementById("snippet3").innerHTML = snip3;

        /*-------------------------------------------------------------------*/
        /*pulling LOCATIONS from JSON seperately and inserting into HTML*/
        var loc1 = response.locations[0];
        document.getElementById("location1").innerHTML = loc1;
        var loc2 = response.locations[1];
        document.getElementById("location2").innerHTML = loc2;
        var loc3 = response.locations[2];
        document.getElementById("location3").innerHTML = loc3;
        var loc4 = response.locations[3];
        document.getElementById("location4").innerHTML = loc4;
        var loc5 = response.locations[4];
        document.getElementById("location5").innerHTML = loc5;

        /*-------------------------------------------------------------------*/
        /*template for images*/
        function imageTemplate(gallery) {
            return `
        <div class="images">
        <img src="${gallery.src}" "><br>
        <h3 class="imageText">${gallery.text}</h3>
        </div>
        `
        }
        /*using map to call back and join to recreate arrays and pull template from above*/
        var gallery1 = response.gallery;
        document.getElementById("images").innerHTML = `
        ${gallery.map(imageTemplate).join('')}
        `
   
        /*-------------------------------------------------------------------*/
        /*template for episode array*/
        function episodeTemplate(episodes) {
            return `
            <div class="ep-list">
                <h3 class="seasons">Season: ${episodes.season}</h3>
                <h5 class="names"> ${episodes.name}</h5>
                    <ul class="ratings"> Rating: ${episodes.rating}</ul>
            </div>
              `
        }
        /*use map to call back and join to recreate arrays pulling template created above */
        var episodes = response.episode;
        document.getElementById("eps").innerHTML = `
        <h3 class="ep-results">Episode List (${episodes.length} results)</h3>
        ${episodes.map(episodeTemplate).join('')}
        `


    }
};

xhttp.open("GET", "/en_US.json", true);
xhttp.send(); 
}
/*-------------------------------------------------------------------*/
/*Selector of Pig Latin version of JSON Data*/
function loadPig() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(xhttp.responseText);

            /*-------------------------------------------------------------------*/
            /* HEADING from JSON to HTML*/
            var title = response.heading;
            document.getElementById("heading").innerHTML = title;

            /*-------------------------------------------------------------------*/
            /* DESCRIPTION from JSON to HTML*/
            var summary = response.description;
            document.getElementById("description").innerHTML = summary;


            /*-------------------------------------------------------------------*/
            /*pulling video  --- log to console, come back to find a way to pull to HTML*/
            var video = response.video;
            console.log(video);

            /*-------------------------------------------------------------------*/
            /*pulling SNIPPETS from JSON seperately and inserting into HTML*/
            var snip1 = response.snippets[0];
            document.getElementById("snippet1").innerHTML = snip1;
            var snip2 = response.snippets[1];
            document.getElementById("snippet2").innerHTML = snip2;
            var snip3 = response.snippets[2]
            document.getElementById("snippet3").innerHTML = snip3;

            /*-------------------------------------------------------------------*/
            /*pulling LOCATIONS from JSON seperately and inserting into HTML*/
            var loc1 = response.locations[0];
            document.getElementById("location1").innerHTML = loc1;
            var loc2 = response.locations[1];
            document.getElementById("location2").innerHTML = loc2;
            var loc3 = response.locations[2];
            document.getElementById("location3").innerHTML = loc3;
            var loc4 = response.locations[3];
            document.getElementById("location4").innerHTML = loc4;
            var loc5 = response.locations[4];
            document.getElementById("location5").innerHTML = loc5;

            /*-------------------------------------------------------------------*/
            /*template for images*/
            function imageTemplate(gallery) {
                return `
        <div class="images">
        <img src="${gallery.src}"><br>
        <h3 class="imageText">${gallery.text}</h3>
        </div>
        `
            }
            /*using map and join to recreate arrays and pull template from above*/
            var gallery = response.gallery;
            document.getElementById("images").innerHTML = `
        ${gallery.map(imageTemplate).join('')}
        `


            /*-------------------------------------------------------------------*/
            /*template for episode array*/
            function episodeTemplate(episodes) {
                return `
            <div class="season">
                <h3>Season: ${episodes.season}</h3>
                <h5> ${episodes.name}</h5>
                    <ul> Rating: ${episodes.rating}</ul>
            </div>
              `
            }
            /*use map and join to recreate arrays pulling template created above */
            var episodes = response.episode;
            document.getElementById("eps").innerHTML = `
        <h3 class="ep-results">Episode List (${episodes.length} results)</h3>
        ${episodes.map(episodeTemplate).join('')}
        `


        }
    };

xhttp.open("GET", "/la_PG.json", true);
xhttp.send();
}
        
    

/*--------------------------------------------------------------------------*/
    /*Nav Bar to Mobile Hamburger*/ 

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav_links');
        const navLinks = document.querySelectorAll('nav_links li');
    
    burger.addEventListener('click', () => {
         
        /*Toggle Nav*/
        nav.classList.toggle('nav-active');
        });
    };


navSlide();
