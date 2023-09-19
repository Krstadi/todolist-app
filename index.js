// 1. Reference HTML elemen form in JS
const formTask = document.querySelector(".form-task");

// 2. Menambahkan event listener di elemen form
formTask.addEventListener("submit", (event) => {
    event.preventDefault();

// 3. Reference html elemen input
    const inputForm= document.querySelector(".input-form");
    console.log(inputForm.value)

    // 4. Reference html elemen ul / wrapper list
    const wrapperList = document.querySelector(".task-list-wrapper");
    
    // 5. Create document <li> using js
    const taskList = document.createElement("li");
    
    // 6. Masukkan input value ke <li>
    taskList.innerHTML = inputForm.value;

    // 7. Append <li> ke <ul>
    wrapperList.append(taskList);

    // 8. menghilangkan karakter di dalam input
    inputForm.value = "";
});
