const populate = async(values, currency)=>{
    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_u1worI2XazNvFvRaJMLNJlVHB8MZn5cIEYNx8ILI&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector('.output').style.display = "block"
    for (let key of  Object.keys(rJson["data"])){
        mystr+= `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * values)}</td>
                </tr>`
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const values = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    populate(values, currency);
})