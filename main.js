function filterItems(category) {
    let items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

let count = 1;

function increase() {
    count++;
    document.getElementById("count").textContent = count;
}

function decrease() {
    if (count > 0) {
        count--;
    }
    document.getElementById("count").textContent = count;
}


let count1 = 1;

function increase1() {
    count1++;
    document.getElementById("count1").textContent = count1;
}

function decrease1() {
    if (count1 > 0) {
        count--;
    }
    document.getElementById("count1").textContent = count1;
}



let username = document.getElementById("username");
let userphone = document.getElementById("userphone");

document.querySelector("#sendBtn").addEventListener("click", () => {
    let checkName = username.value.trim();
    let checkPhone = userphone.value.trim();

    if (checkName === "" || checkPhone === "" || checkName.length < 5 || checkPhone.length < 9) {
        alert("Iltimos, formatni to'liq to'ldiring!");
        username.focus();
    } else {
        sendtelegram(`Xaridor ma'lumotlari:\nManzil: ${checkName}\nTelefon raqami: ${checkPhone}`);
        username.value = "";
        userphone.value = "";
    }
});

function sendtelegram(message) {
    let telegram_bot_id = "8155254434:AAHKqJV9rVyhO-A5ItOC7AuD2CQkwrJPXW4";
    let chat_id = 5987260202;

    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_id: chat_id, text: message }),
    })
    .then(response => response.json())
    .then(data => console.log("Xabar yuborildi:", data))
    .catch(error => console.error("Xatolik:", error));
}