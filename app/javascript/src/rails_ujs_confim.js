import Rails from "@rails/ujs"

Rails.confirm = (message, el) => {
  try {
    let modalEl = document.getElementById('confimModal')

    if (!modalEl) {
      let modalHTML = `
<!-- Modal -->
<div class="modal fade" id="confimModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confimModalLabel">Confirmation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary w-25">Ok</button>
        <button type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
`
      document.body.insertAdjacentHTML('beforeend', modalHTML)
      modalEl = document.getElementById('confimModal')

      modalEl.querySelector('.btn-primary').addEventListener('click', e => {
        delete el.dataset.confirm
        el.click()
      })

      modalEl.addEventListener('shown.bs.modal', () => {
        modalEl.querySelector('.btn-secondary').focus()
      })
    }

    modalEl.querySelector('.modal-body').textContent = message

    let modal = new bootstrap.Modal(modalEl, { backdrop: 'static' })
    modal.show()

    return false
  } catch {
    return confirm(message)
  }
}
