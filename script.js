let push = document.querySelector("#push"),
    input = document.querySelector("#newtask input"),
    tasks = document.querySelector("#tasks")

push.addEventListener('click', function () {
    if(input.value.length == 0) {
        alert('Error: Type task that you want to do.')
    } else {
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `
        input.value = ''
        let currentTasks = document.querySelectorAll('.delete')
        for(let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].addEventListener('click', function () {
                this.parentNode.remove()
            })
        }
    }
})