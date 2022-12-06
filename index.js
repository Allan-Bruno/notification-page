let subtract = () => {
  let notifications = document.getElementById("notifications");

  let counter = document.getElementById("counter");

  let newValue = Number(counter.innerText) - 1;

  let e = event.target;

  if (newValue < 0) {
    newValue = 0;
  }

  console.log(e.parentElement);

  e.parentElement.classList.remove("new");

  counter.innerText = newValue;

  notifications.addEventListener("click", () => {
    if ((e.tagName = "BUTTON")) {
      e.setAttribute("disabled", "");
    }
  });
};

let markAllAsRead = () => {
  let buttons = document.getElementsByClassName("markAsRead");

  let notifications = document.getElementsByClassName("notification");

  let newValue = Number(counter.innerText) - 7;

  if (newValue < 0) {
    newValue = 0;
  }

  counter.innerText = newValue;

  for (let i = 0; i < notifications.length; i++) {
    notifications[i].classList.remove("new");
  }

  for (let i = 0; i < notifications.length; i = i + 1) {
    buttons[i].setAttribute("disabled", "disabled");
  }
};
