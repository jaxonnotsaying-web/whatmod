const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalSubmit = document.getElementById('modalSubmit');
const demoForm = document.getElementById('demoForm');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}
function openModal(mode) {
  if (mode === 'upload') {
    modalTitle.textContent = 'Upload a mod';
    modalDescription.textContent = 'Creator uploads will require a real account. This prototype does not upload or store files yet.';
    modalSubmit.textContent = 'Continue';
  } else if (mode === 'signup') {
    modalTitle.textContent = 'Join WHAT MOD';
    modalDescription.textContent = 'Create an account to become a creator. Account registration will be connected in a later version.';
    modalSubmit.textContent = 'Create account';
  } else {
    modalTitle.textContent = 'Welcome back';
    modalDescription.textContent = 'Sign in to manage your mods. Authentication is not connected in this prototype.';
    modalSubmit.textContent = 'Log in';
  }
  demoForm.reset();
  modalBackdrop.hidden = false;
}
function closeModal() { modalBackdrop.hidden = true; }
document.getElementById('loginBtn').addEventListener('click', () => openModal('login'));
document.getElementById('signupBtn').addEventListener('click', () => openModal('signup'));
document.getElementById('heroUpload').addEventListener('click', () => openModal('upload'));
document.getElementById('closeModal').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
demoForm.addEventListener('submit', e => {
  e.preventDefault();
  closeModal();
  showToast('Demo only: accounts and uploads are not connected yet.');
});

const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.mod-card')];
const categoryButtons = [...document.querySelectorAll('.category')];
let selectedGame = 'All';

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const matchesGame = selectedGame === 'All' || card.dataset.game === selectedGame;
    const matchesQuery = !query || (card.dataset.search + ' ' + card.innerText).toLowerCase().includes(query);
    const visible = matchesGame && matchesQuery;
    card.hidden = !visible;
    if (visible) shown++;
  });
  let empty = document.getElementById('emptyState');
  if (!shown) {
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'emptyState';
      empty.className = 'empty-state';
      empty.textContent = 'No sample mods found. Try another search or game category.';
      document.getElementById('modGrid').appendChild(empty);
    }
  } else if (empty) empty.remove();
}
categoryButtons.forEach(button => button.addEventListener('click', () => {
  categoryButtons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  selectedGame = button.dataset.game;
  filterCards();
}));
searchInput.addEventListener('input', filterCards);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('modGrid').scrollIntoView({behavior:'smooth',block:'start'}); });
document.querySelectorAll('.details-btn').forEach(button => button.addEventListener('click', () => {
  showToast(`${button.dataset.title} is a sample listing. Real mod pages and downloads will be added later.`);
}));
