function handleSubmit() {
    event.preventDefault(); // جلوگیری از رفرش شدن فرم

    // گرفتن مقدار ورودی
    const input = document.getElementById("textInput");
    const value = input.value.trim();

    // ساختن یک li جدید
    const li = document.createElement("li");
    li.innerHTML = value;

    // انتخاب لیست بر اساس وضعیت
    const status = document.getElementById("ISSUES").value;
    if (value) {
        if (status === "ToDo") {
            document.getElementById("toDoList").appendChild(li);
            li.style.color = "gray";
        } else if (status === "progress") {
            document.getElementById("progressList").appendChild(li);
            li.style.color = "yellow";
        } else if (status === "done") {
            document.getElementById("doneList").appendChild(li);
            li.style.color = "green";
        }
          input.value = ""; // پاک کردن ورودی پس از اضافه کردن

        input.focus(); // بازگرداندن فوکوس به ورودی پس از ارسال

    }
    else {
        alert("Please enter a task.");

        return;
    }

    // پاک کردن ورودی
    input.value = "";
}