const subtract = () => {
  const notifications = document.getElementById("notifications");

  const counter = document.getElementById("counter");

  const newValue = Number(counter.innerText) - 1;

  const e = event.target;

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

const markAllAsRead = () => {
  const buttons = document.getElementsByClassName("markAsRead");

  const notifications = document.getElementsByClassName("notification");

  const newValue = Number(counter.innerText) - 7;

  if (newValue < 0) {
    newValue = 0;
  }

  counter.innerText = newValue;

  for (let i = 0; i < notifications.length; i++) {
    notifications[i].classList.remove("new");
  }

  for (let i = buttons.length - 1; i >= 0; --i) {
    buttons[i].remove();
  }
};
