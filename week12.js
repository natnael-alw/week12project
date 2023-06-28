
let updateDiv= $('#updateDiv')
const endpoint = 'https://648e2ea82de8d0ea11e89bb7.mockapi.io/studentRoster'


function x (){   //this is to edit an exixting user upon click
    cancelUpdate()
    //$.get(endpoint).then(data=>data.map(
        // $('#updateButton').addEventListener('click', ()=> 
        $('#updateDiv').append(
            ` <div id="updateDiv" class=" form-group jumbotron">
            <br>
            <button class="btn btn-warning" onclick="cancelUpdate()"> cancel</button>

            <input class="form-control form-control-sm" placeholder="update Id" id="updateId" type="text" value="">
              <input type="text" placeholder="update Name" class="form-control form-control-sm" id="updateName">
              <input class="form-control form-control-sm"  id="updatePhone" type="text" placeholder="Update Phone">
          
              <br>
              <button  class="form-control  btn btn-primary" onclick="updateStudent()" id="updateButton">Submit</button>
            </div>`)
            $('#hr').after( ` <h2 id="h2">Update records</h2>`)

        //    ))
          
        }
        
       

function cancelUpdate(){
    $('#updateDiv').empty()
   $('#h2').empty()

}



    document.getElementById('updator').addEventListener('click', x)
    


function add() {

    $.post(endpoint, {
    fullName: $('#studentName').val() ,
    id:  $('#id').val(),
    phoneNumber: $('#number').val() 
    })
    
    $('#addButton').after(`<div class="alert alert-success" role="alert">Successful</div>`)
     reset()
  }
function refreshList(){
    location.reload()
}
$('#refreshButton')
  function updateStudent(id){
      // console.log(98765)
      id = $('#updateId').val()
      
      $.ajax(`${endpoint}/${id}`, {
          method: 'PUT',
          // dataType: 'json',
          data: {
              fullName: $('#updateName').val(),
              phoneNumber:$('#updatePhone').val()
            }
        })
        $('#updateName').empty()
        $('#updatePhone').empty()
        $('#updateId').empty()
        updateControl=true
        updateDiv.empty()
        $('#h2').empty()
        $('#hr').after(`<div class="alert alert-success" role="alert">Successful</div>`)
    }
    
    
    
    $.get(endpoint).then(data=>data.map(
        x=>
        
        
        $('tbody').append(
            `<tr>
            
            <td>${x.id}</td> 
            <td>${x.fullName}</td>
            <td>${x.phoneNumber}</td>
            <td> <button class= "btn btn-danger"  onclick="deleteStudent(${x.id})"  >🗑</button></td>
            <td> <button class="btn btn-outline-success" onClick= "x(${x.id})" id="updator" >Update </button></td>
            
            </tr>
            `
            
            )
            
            ))
            
            
            document.getElementById('addButton').addEventListener('click', add)
    // $.get(endpoint).then(data=>data.map(
    //     x=>function xz (){
    
    //         //$.get(endpoint).then(data=>data.map(
    //             // $('#updateButton').addEventListener('click', ()=> 
    //             $('#updateDiv').append(
                       
    //                 `
    //                 <div id="updateDiv" class=" form-group jumbotron">
    //                 <br>
    //                 <button class="btn btn-warning" onclick="cancelUpdate()"> cancel</button>
        
    //                 <input class="form-control form-control-sm" placeholder="update Id" id="updateId" type="text" value="${x.id}">
    //                   <input type="text" placeholder="update Name" class="form-control form-control-sm" id="updateName">
    //                   <input class="form-control form-control-sm"  id="updatePhone" type="text" placeholder="Update Phone">
                  
    //                   <br>
    //                   <button  class="form-control  btn btn-primary" onclick="updateStudent()" id="updateButton">Submit</button>
    //                 </div>`)
    //                 $('#hr').after( ` <h2 id="h2">Update records</h2>`)
        
                  //  ))
                  
                //   document.getElementById('updator').addEventListener('click', xz)
                // }
                
                // ) ) 

function deleteStudent (id){
    $.ajax(`${endpoint}/${id}`, {
        method: 'DELETE',
        
    })
}


function reset (){
    document.getElementById('studentName').value= "";
    document.getElementById('number').value= "";
    document.getElementById('updateName').value= "";
    document.getElementById('updatePhone').value= "";
    document.getElementById('updateId').value= "";

}




// class Student{
//     constructor(fullName, phoneNumber){

//         this.fullName=fullName
//         this.phoneNumber=phoneNumber
//     }
//     add() {

//         $.post(endpoint, {
//         fullName: $('#studentName').val()  ,
//         id:  $('#id').val(),
//         phoneNumber: $('#number').val() 
//         })
        
//          reset()
    
//       }
// }

function search(){
    cancelSearch()
    $('#searchDiv').prepend(

        `
        <input id='searchInput' class=form-control placeholder="enter name to search"><button class="btn btn-warning" onclick="cancelSearch()"> cancel</button>
        <button class="btn btn-success" id="submitSearch" onclick="searchResult()">submit</button>
        `
    )
}

function cancelSearch(){
    $('#searchDiv').empty()
}


