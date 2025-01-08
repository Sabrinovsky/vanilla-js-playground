let observableCount = subject(0);

document.addEventListener("DOMContentLoaded", function () {
  unsub1 = observableCount.subscribe((value) => {
    document.getElementById("hello").innerText = `Hello world ${value}`;
  });

  observableCount.subscribe((value) => {
    if (value === 10) {
      let element = document.createElement("h1");
      element.textContent = "You ain't gonna stop arent you?";
      document.querySelector("body").appendChild(element);
      document.getElementById("hello").remove();
      unsub1();
    }
  });

  document.querySelector("#add").addEventListener("click", () => {
    observableCount.setValue(observableCount.value() + 1);
  });
});
