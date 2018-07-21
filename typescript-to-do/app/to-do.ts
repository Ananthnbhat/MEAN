class Task {  //class defining
    done: boolean = false; //its properties(key value pair)

    constructor(public description: string, priority: string) { }//constructor defining

    markDone() {//creating class method
        this.done = true;
    }
}

var tasks: Task[] = [];//creating variable of type Task class nad we wnat an array
tasks.push(new Task('DO the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for (var task of tasks) {//for loop in typescript
    console.log(task);
}