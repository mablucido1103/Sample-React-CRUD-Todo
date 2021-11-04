var app = new function() {
    this.el = document.getElementById('tasks');
    this.tasks=[]

    // To view the added  todo lists
    this.fetchAll = function(){
        var data='';
        console.log(tasks)

        if (this.tasks.length >0 ) {
          for (i=0; i < this.tasks.length; i++) {
            data += '<td><input type="checkbox" id="checkbox1" onclick="app.Edit(' +i+ ')"></input></td>'; 
            data += '<td>' + " " + this.tasks[i] + '</td>';
            data += '<td><input type="image" id="delete-button" img src="deleteButton.png"  onclick="app.Delete(' +i+ ')"></input></td>'; 
            data += '</tr>';
          } 
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data
    };

    //To add new tasks todo list
    this.Add = function() {
      el = document.getElementById('add-todo');
      var task = el.value;
      if(task) {
        this.tasks.push(task.trim());
        el.value='';
        this.fetchAll();
      }
    };

    // To update the added todo list
    this.Edit = function(item) {
      el = document.getElementById('edit-todo');
      el.value = this.tasks[item]
      document.getElementById('edit-box').style.display = 'block';
      self=this;

      document.getElementById('save-edit').onsubmit = function(){
        var task = el.value;
        if(task){
          self.tasks.splice(item, 1, task.trim());
          self.fetchAll();
          CloseInput();
        }
      }
    };

    // To delete some todo list
    this.Delete = function(item) {
      this.tasks.splice(item, 1)
      this.fetchAll();
    };

    // To count the added todo list
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Unfinished Tasks';
  
      if (data) {
          if(data == 1){
              name = 'Unfinished Task'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }

       // If checked, Edit box and delete button will appear.
    };

    this.isChecked = function() {
    }
    
  }

app.fetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';

}