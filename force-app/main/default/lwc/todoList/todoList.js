import { LightningElement,track } from 'lwc';

export default class TodoList extends LightningElement {
    newtask='';
   @track taskList=[
       
    ];

    fetchNewtask(event){
        this.newtask = event.target.value;
    }

    addTaskToList(event){
        this.taskList.unshift({id:this.taskList.length+1, name:this.newtask});
        this.newtask=''
        console.log(JSON.stringify(this.taskList));
    }

    deletetask(event){
        let idtoDelete=event.target.name;
        console.log(idtoDelete);
        let taskIndex=''
        for(let i=0;i<this.taskList.length;i++){
            if(idtoDelete===this.taskList[i].id){
                taskIndex=i;
            }
        } 
        
        this.taskList.splice(taskIndex, 1);
        console.log(JSON.stringify(this.taskList));

         // * Method 2
        /*
        todoTasks.splice(
            todoTasks.findIndex(function(todoTask) {
                return todoTask.id === idToDelete;
            })
            , 1
        );
        */

        // * Method 3
        // todoTasks.splice(todoTasks.findIndex(todoTask => todoTask.id === idToDelete), 1);
    }

}