function consumirAPI(){

    console.log("Iniciando busqueda");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    

    fetch(url)
    .then(response => response.json())
    .then(json => {

        var divHero = document.getElementById("hero");

        for (element of json.data.results) {

            var name = element.name;
            var imagenUrl = element.thumbnail.path+ "." + element.thumbnail.extension;
            var descripcion = element.description;

            createDivHero(divHero, name, imagenUrl, descripcion);
            
        };
        
        console.log(json);

    });

    function createDivHero(divHero, name, imagenUrl, description) {

        var divPadre = document.createElement("div");
        var divHijo = document.createElement("div"); 
        var nameH = document.createElement("h3");
        var img = document.createElement("img");
        var descripcion = document.createElement("p");
        //var enlaceSeries = document.createElement("a")
        //var enlaceComics = document.createElement("a")
        //var enlaceEventos = document.createElement("a")
        //var enlaceStories = document.createElement("a")

        //enlaceSeries.href = "series.html";
        //enlaceComics.href = "comics.html";
        //enlaceEventos.href = "eventos.html";
        //enlaceStories.href = "stories.html";

        nameH.innerHTML = name;
        img.src = imagenUrl; 
        descripcion.innerHTML = description;
        //enlaceSeries.innerHTML = "Ver series";
        //enlaceComics.innerHTML = "Ver comics";
        //enlaceEventos.innerHTML = "Ver eventos";
        //enlaceStories.innerHTML = "Ver stories";
        

        divHijo.appendChild(nameH); 
        divHijo.appendChild(img); 
        divHijo.appendChild(descripcion);
        divPadre.appendChild(divHijo); 
        divHero.appendChild(divPadre);

        var series = document.createElement("a");
        series.innerText = "Ver Series";
        series.href = "html/series.html?objeto=" + element.series.collectionURI;
        divHijo.appendChild(series);

        var comics = document.createElement("a");
        comics.innerText = "Ver comics";
        comics.href = "html/comics.html?objeto=" + element.comics.collectionURI;
        divHijo.appendChild(comics);

        var eventos = document.createElement("a");
        eventos.innerText = "Ver eventos";
        eventos.href = "html/eventos.html?objeto=" + element.events.collectionURI;
        divHijo.appendChild(eventos);

        //divHijo.appendChild(enlaceSeries);
        //divHijo.appendChild(enlaceComics);
        //divHijo.appendChild(enlaceEventos);
        //divHijo.appendChild(enlaceStories);

    }

}

function seriesM(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');


    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })

  }

  function comicsM(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');


    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })

  }

  function eventosM(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');


    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })

  }

function Arreglo_url(url_inconple){

  var apikey = "d8b02dc109d7a677a61793797397e470";
  var ts = "1000";
  var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";

  var url_comple = "https://" + url_inconple.substring(7, url_inconple.length) + "?ts=" + ts + "&apikey=" + apikey + "&hash=" + hash
return url_comple
}

