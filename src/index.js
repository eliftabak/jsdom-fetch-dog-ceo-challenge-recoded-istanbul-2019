console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=> {
 dogImage();
 dogBreed();
});

function dogImage() {
      fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(response => response.json())
      .then(data => {
          data['message'].forEach(dog => {
            let imgContainer = document.getElementById('dog-image-container');
            let dogImg = document.createElement('img');
            dogImg.src = dog;
            dogImg.style.width = "15 rem";
            dogImg.style.height = "15rem"
            imgContainer.appendChild(dogImg);
          });
      })
    }

function dogBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
            return response.json();
        })
        .then(data => populate(data.message));
        function populate(dog_list){
            let container = document.getElementById('dog-breeds');
            for (dog in dog_list) {
                let li = document.createElement('li');
                let dogName = document.createTextNode(dog);
                li.appendChild(dogName);
                container.appendChild(li);
                li.addEventListener("click", function() {
                    li.style.color = '#cf60d3';
                  });
            }
        }
    }

let menuOpt = document.getElementById('breed-dropdown');

menuOpt.addEventListener('change', () => {
    function sortItems(e) {
        let menuOpt = document.querySelector('select#breed-dropdown');
         if (menuOpt.value == 0) {
            let li = document.querySelectorAll(li);
            let firstLetter = li.substring(0,1);
            console.log(firstLetter) 
        } 
    }
})
