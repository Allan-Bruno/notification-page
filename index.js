let subtract = () => {
  let notifications = document.getElementById("notifications");

  let counter = document.getElementById("counter");

  let newValue = Number(counter.innerText) - 1;

  let e = event.target;

  e.parentElement.classList.remove("new");

  if (newValue < 0) {
    newValue = 0;
  }

  counter.innerText = newValue;

  notifications.addEventListener("click", () => {
    if ((e.tagName = "BUTTON")) {
      e.remove(e);
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

  console.log(buttons);

  counter.innerText = newValue;

  for (let i = 0; i < notifications.length; i++) {
    notifications[i].classList.remove("new");
  }

  for (let i = buttons.length - 1; i >= 0; --i) {
    buttons[i].remove();
  }
};
