async function main(){
    resp = await fetch("http://185.18.52.13/api/transaction/{id}") 
    data = await resp.json()
    let data_bank = data["transaction"]["selectedProvider"]["method"]
    let data_summ = data["transaction"]["pricing"]["local"]["amount"]
    let data_account = data["requisite"]["maskedAccountNumber"]
    if (data_bank == "sberbank"){
      document.getElementById("sberbank_logo").style.display = "initial"
      document.getElementById("div_bank").innerHTML = "Сбербанк"
    }
    if (data_bank == "tinkoff"){
      document.getElementById("div_bank").innerHTML = "Тинькофф"
    }
    if (data_bank == "alpha"){
      document.getElementById("div_bank").innerHTML = "Альфа"
    }
    if (data_bank == "ALL"){
      document.getElementById("div_bank").innerHTML = "ALL"
    }
    document.getElementById("div_summ").innerHTML = data_summ
    document.getElementById("div_card").innerHTML = data_account
}
main()

function copyRuble(){
    navigator.clipboard.writeText("This is the text to be copied").then(() => {
        var copyText = document.getElementById("div_summ");
        navigator.clipboard.writeText(copyText.innerHTML);
      },() => {
        console.error('Failed to copy');
        alert("Не получилось скопировать текст")
      });
}
function copyCard(){
    navigator.clipboard.writeText("This is the text to be copied").then(() => {
        var copyText = document.getElementById("div_card");
        navigator.clipboard.writeText(copyText.innerHTML);
      },() => {
        console.error('Failed to copy');
        alert("Не получилось скопировать текст")
      });
}


