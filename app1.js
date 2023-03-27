const key =
  "https://crudcrud.com/api/f30ba19eb3e64c17b4524801b02d78a8/products";
const ul = document.getElementById("items");

async function getDetails() {
  try {
    let value = 0;
    const response = await axios.get(key);
    console.log(response)
    const arrayData = response.data;
    arrayData.forEach((element) => {
      createli(element.product_name, element.product_price);
      value += Number(element.product_price);
    });
    console.log(value);
    document.getElementById(
      "sum"
    ).textContent = `Total Value Worth of Produts : Rs ${value}/-`;
  } catch (error) {
    alert("Something went wrong");
    console.error(error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getDetails();
});

function createli(name, price) {
  //create new li with delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("onclick", "deleteBtnFn(event)");
  deleteBtn.setAttribute("style", "float:right;");
  deleteBtn.value = "Delete Item";
  deleteBtn.className = "btn btn-outline-danger btn-sm";

  //create li element
  const liElement = document.createElement("li");
  liElement.className = "item list-group-item";
  liElement.textContent = `${name}-${price}`;

  liElement.appendChild(deleteBtn); //appending delete button to list element
  ul.appendChild(liElement); //appending list to ul
}

//On submitting form below function is called
async function addProduct(event) {
  try {
    event.preventDefault();
    const price = document.getElementById("price").value;
    const name = document.getElementById("name").value;

    const obj = {
      product_name: name,
      product_price: price,
    };
    axios.post(key, obj);

    location.reload(); 
  } catch (error) {
    alert("Something went wrong");
    console.error(error);
  }

 
}

//on pressing delete button.
async function deleteBtnFn(event) {
  try {
    event.target.parentNode.style.display = "none";
    const name = event.target.parentNode.textContent.split("-")[0];
    const price = event.target.parentNode.textContent.split("-")[1];

    const getData = async () => {
      let id,
        itemToRemove,
        value = 0;
      const response = await axios.get(key);
      const arrayData = await response;
      arrayData.data.forEach((element) => {
        if (name == element.product_name && price == element.product_price) {
          id = element._id;
          itemToRemove = element.product_price;
        }
        value += Number(element.product_price);
      });
      return [id, value, itemToRemove];
    };

    const result = await getData();
    axios.delete(`${key}/${result[0]}`);
    document.getElementById(
      "sum"
    ).textContent = `Total Value Worth of Produts : Rs ${
      Number(result[1]) - Number(result[2])
    }/-`;
  } catch (error) {
    alert("Something went wrong");
    console.error(error);
  }
}
