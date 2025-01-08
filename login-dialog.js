const loginDialogObservable = subject(false);

function openModal() {
  loginDialogObservable.setValue(true);
}

loginDialogObservable.subscribe((value) => {
  if (!value) return;

  // const dialog = document.createElement("dialog");
  // dialog.classList.add("dialog");
  // dialog.innerText = "Teste";
  // document.body.appendChild(dialog);
  // dialog.showModal();

  // setTimeout(() => {
  //   dialog.close();
  // }, 1000);

  const dialog = document.createElement("modal-component");

  document.body.appendChild(dialog);

  dialog.open();
});
