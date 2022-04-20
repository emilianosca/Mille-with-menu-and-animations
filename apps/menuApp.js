const menu = [
    {
      id: 1,
      title: "Salmón Avocado Toast",
      category: "Salado",
      price: 150,
      img: "./images/item-1.jpeg",
      desc: `Salmón ahumado, huevo pochado, aguacate, pesto,
      semillas tostadas, aceite de ajo frito y ensalada.`,
    },
    {
      id: 2,
      title: "Huevos Cocotte",
      category: "Salado",
      price: 135,
      img: "./images/item-2.jpeg",
      desc: `Huevo pochado, jamón de pavo, salsa pomodoro, bechamel,
      tocino crujiente, cebolla caramelizada y pan tostado.`,
    },
    {
      id: 3,
      title: "Desayuno Keto",
      category: "Salado",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `Huevo revuelto, queso panela a la plancha, tocino crujiente, espinacas a la crema y nuez tostada.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "Temporada",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "Pasteles",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "Bebidas",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "Salado",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "French Toast",
      category: "Dulce",
      price: 135,
      img: "./images/item-8.jpeg",
      desc: `Brioche hecho en casa, compota de frutos rojos, amaranto y frutos del bosque`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "Temporada",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "Pasteles",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "Expresso",
      category: "Bebidas",
      price: 30,
      img: "./images/expresso.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 12,
      title: "Cortado",
      category: "Bebidas",
      price: 34,
      img: "./images/cortado.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 13,
      title: "Americano Caliente/Frio Chico",
      category: "Bebidas",
      price: 34,
      img: "./images/americanoCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 14,
      title: "Americano Caliente/Frio Grande",
      category: "Bebidas",
      price: 38,
      img: "./images/americanoCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 15,
      title: "Capuccino Caliente/Frio Chico",
      category: "Bebidas",
      price: 50,
      img: "./images/capuccinoCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 16,
      title: "Capuccino Caliente/Frio Grande",
      category: "Bebidas",
      price: 54,
      img: "./images/capuccinoCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 17,
      title: "Latte Caliente/Frio Chico",
      category: "Bebidas",
      price: 55,
      img: "./images/latteCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 18,
      title: "Latte Caliente/Frio Grande",
      category: "Bebidas",
      price: 59,
      img: "./images/latteCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 19,
      title: "Vainilla Late Caliente/Frio Chico",
      category: "Bebidas",
      price: 56,
      img: "./images/latteVainilla.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 20,
      title: "Vainilla Late Caliente/Frio Grande",
      category: "Bebidas",
      price: 60,
      img: "./images/latteVainilla.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 21,
      title: "Caramel Late Caliente/Frio Chico",
      category: "Bebidas",
      price: 56,
      img: "./images/latteCaramell.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 22,
      title: "Caramel Late Caliente/Frio Grande",
      category: "Bebidas",
      price: 60,
      img: "./images/latteCaramell.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 23,
      title: "Mocha Caliente/Frio Chico",
      category: "Bebidas",
      price: 56,
      img: "./images/mochaCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 24,
      title: "Mocha Caliente/Frio Grande",
      category: "Bebidas",
      price: 60,
      img: "./images/mochaCoffee.jpeg",
      desc: `Frio o caliente, para llevar o comer en tienda.`,
    },
    {
      id: 25,
      title: "Chocolate Caliente/Frio Grande",
      category: "Bebidas",
      price: 60,
      img: "./images/mochaCoffee.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Todos"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Todos") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  
  
  
  
  
  // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //   // true for mobile device
  //   console.log("mobile");
    
  //   // document.getElementById('.btn-container').style.gridTemplateColumns = "50% 50%";
  //   // document.getElementById('.btn-container').style.fontsize = "1rem"
  //   // document.getElementsByClassName('.btn-container').style.backgroundColor = "black";
  //   // document.getElementById('.logo').style.width = "10.5rem"
  // }else{
  //   // false for not mobile device
  //   console.log("not mobile device");
  // }