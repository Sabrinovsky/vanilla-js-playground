class Modal extends HTMLElement {
  dialog;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        dialog[open] {
          height: 500px;
          width: 500px;
          animation: openModal 0.2s;
        }
        dialog::backdrop {
          animation: openModal 0.2s;

        }
        dialog.closing {
          animation: closeModal 0.2s;
        }
        @keyframes openModal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes closeModal {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      </style>
      <dialog>
        <div>
          <button class="button" id="close">X</button>
        </div>
      </dialog>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.dialog = this.shadowRoot.querySelector("dialog");

    this.shadowRoot.querySelector("#close").addEventListener("click", () => {
      this.close();
    });
    this.dialog.onclose = () => this.close();
  }
  open() {
    this.dialog.showModal();
  }
  close() {
    this.remove();
  }
}

customElements.define("modal-component", Modal);
