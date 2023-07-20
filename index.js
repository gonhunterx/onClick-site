// JavaScript to handle creating new notes
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create-note-btn").addEventListener("click", function () {
        createNote();
    });
});

function createNote() {
    const notesContainer = document.getElementById("notes-container");

    // Create a new note element
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.contentEditable = "true"; // Make the note editable

    // Add the note to the notes container
    notesContainer.appendChild(noteElement);

    // Focus on the new note for immediate editing
    noteElement.focus();
}
