const modal = document.querySelector('.modal');
const modalChild = document.querySelector('.modal-child');
const exitBtn = document.querySelector('.exit-modal-btn');
const claimBtn = document.querySelector('.claim-now-btn');

const setModal = () => {
  window.onload = () => {
    if (localStorage.getItem('hasClaimed') === null) {
      modal.className = 'modal fade-in';
    }
  };
};

const handleModalClose = () => {
  modal.className = 'modal fade-out';
  modalChild.className = 'modal-child child-out';
  setTimeout(() => {
    modal.className = 'modal hidden';
  }, 1000);
};

modal.addEventListener('click', () => {
  handleModalClose();
});

modalChild.addEventListener('click', e => {
  e.stopPropagation();
});

exitBtn.addEventListener('click', () => {
  handleModalClose();
});

claimBtn.addEventListener('click', () => {
  localStorage.setItem('hasClaimed', true);
  handleModalClose();
});

setModal();
