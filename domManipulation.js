// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML="Zach";
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click"), function () { image.src="https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F8f5e523ee6b2479e26ecc91b9c25261e%2F1015f%2FMainAfter.jpg&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=tYmxDgFq4MrkJM&vet=12ahUKEwiOj76Qj9SGAxXUk4kEHTOpB0wQM3oECBUQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiOj76Qj9SGAxXUk4kEHTOpB0wQM3oECBUQAA"
});




// 5. Add an event listener to the `image2Button`
 image.src"https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F8f5e523ee6b2479e26ecc91b9c25261e%2F1015f%2FMainAfter.jpg&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=tYmxDgFq4MrkJM&vet=12ahUKEwiOj76Qj9SGAxXUk4kEHTOpB0wQM3oECBUQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiOj76Qj9SGAxXUk4kEHTOpB0wQM3oECBUQAA", function() {

// 6. When clicked, it should change the source of `image` to another image URL
image2Button.addeventListener("click"), function() {

});

// BONUS
// 7. Try using different event types for your buttons.