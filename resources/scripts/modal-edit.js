
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//showModal = function(id, title, author) {
showModal = function(id, title, author){
    var modal = document.getElementById("editModal");
    document.getElementById("updateTitle").value = title;
    document.getElementById("updateAuthor").value = author;
    document.getElementById("updateSubmit").setAttribute('onclick','putBook('+id+')');
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
}

// When the user clicks on <span> (x), close the modal
closeModal = function() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById("editModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function putBook(id){
    //const putBookApiUrl = "https://localhost:5001/api/books/"+id;
    const putBookApiUrl = "https://videoexample321api.herokuapp.com/api/books/"+id;
    
    const bookTitle = document.getElementById("updateTitle").value;
    const bookAuthor = document.getElementById("updateAuthor").value;

    fetch(putBookApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            id: id,
            title: bookTitle,
            author: bookAuthor
        })
    })
    .then((response)=>{
        console.log(response);
        getBooks();
    })

}