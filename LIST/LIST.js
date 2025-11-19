function handleSubmit() {
    const input = document.querySelector("input");
    const value = input.value.trim(); // 👈 trim() حذف فاصله‌های اضافی با تریم


    if (value) {

        const li = document.createElement("li");
        li.innerHTML = value;

        const ul = document.querySelector("ul");
        ul.appendChild(li);

        input.value = ""; // پاک کردن ورودی پس از اضافه کردن

        input.focus(); // بازگرداندن فوکوس به ورودی پس از ارسال

    } else {
        alert("Please enter a task."); // 👈نمایش هشدار در صورت خالی بودن ورودی اما بدون تریم با زدن اسپیس دچار باگ میشود  

        return;
    }

}