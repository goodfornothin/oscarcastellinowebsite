/* ============================================================
   Press / Performance Gallery
   Shared by index.html (preview) and gallery.html (full)
   ============================================================ */

(function (global) {
  const CREDIT_STORAGE_ACK = 'oscarGalleryCreditAck';

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function ensureModal() {
    let modal = document.getElementById('galleryDownloadModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'galleryDownloadModal';
    modal.className = 'gallery-download-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="gallery-download-dialog" role="dialog" aria-modal="true" aria-labelledby="galleryDownloadTitle">
        <button type="button" class="gallery-download-close" data-gallery-close aria-label="Close">&times;</button>
        <p class="gallery-download-eyebrow">Press download</p>
        <h3 id="galleryDownloadTitle">Please credit the photographer</h3>
        <div class="gallery-download-preview">
          <img src="" alt="" id="galleryDownloadPreview">
        </div>
        <p class="gallery-download-meta" id="galleryDownloadMeta"></p>
        <div class="gallery-download-credit-box">
          <p class="gallery-download-credit-label">Required credit</p>
          <p class="gallery-download-credit" id="galleryDownloadCredit"></p>
          <p class="gallery-download-notice" id="galleryDownloadNotice"></p>
        </div>
        <label class="gallery-download-ack">
          <input type="checkbox" id="galleryDownloadAck">
          <span>I will credit the photographer / rights holder when using this image</span>
        </label>
        <div class="gallery-download-actions">
          <button type="button" class="btn btn-outline" data-gallery-close>Cancel</button>
          <button type="button" class="btn btn-primary" id="galleryDownloadConfirm" disabled>Download image</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-gallery-close]')) {
        closeDownloadModal();
      }
    });

    const ack = modal.querySelector('#galleryDownloadAck');
    const confirmBtn = modal.querySelector('#galleryDownloadConfirm');
    ack.addEventListener('change', () => {
      confirmBtn.disabled = !ack.checked;
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeDownloadModal();
      }
    });

    return modal;
  }

  let pendingDownload = null;

  function openDownloadModal(image) {
    const modal = ensureModal();
    pendingDownload = image;
    modal.querySelector('#galleryDownloadPreview').src = image.src;
    modal.querySelector('#galleryDownloadPreview').alt = image.title;
    modal.querySelector('#galleryDownloadTitle').textContent = image.title || 'Download image';
    modal.querySelector('#galleryDownloadMeta').textContent = [
      image.production,
      image.role ? `Role: ${image.role}` : '',
      image.year ? image.year : ''
    ].filter(Boolean).join(' · ');
    modal.querySelector('#galleryDownloadCredit').textContent = image.credit || 'Please credit as advised';
    modal.querySelector('#galleryDownloadNotice').textContent =
      image.creditNotice ||
      'Please credit the photographer before using this image for press or casting.';

    const ack = modal.querySelector('#galleryDownloadAck');
    const confirmBtn = modal.querySelector('#galleryDownloadConfirm');
    const previouslyAcked = sessionStorage.getItem(CREDIT_STORAGE_ACK) === '1';
    ack.checked = previouslyAcked;
    confirmBtn.disabled = !previouslyAcked;

    confirmBtn.onclick = () => {
      if (!ack.checked || !pendingDownload) return;
      sessionStorage.setItem(CREDIT_STORAGE_ACK, '1');
      triggerDownload(pendingDownload);
      closeDownloadModal();
    };

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDownloadModal() {
    const modal = document.getElementById('galleryDownloadModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    pendingDownload = null;
    if (!document.getElementById('lightbox')?.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  async function triggerDownload(image) {
    const downloadSrc = image.hiresSrc || image.src;
    const filename = image.file || downloadSrc.split('/').pop() || 'oscar-castellino.jpg';
    try {
      const response = await fetch(downloadSrc);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      const a = document.createElement('a');
      a.href = downloadSrc;
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  function renderGalleryCard(image, { onOpen } = {}) {
    const item = document.createElement('article');
    item.className = 'gallery-item' + (image.featured ? ' featured' : '');
    item.dataset.category = image.category || '';
    item.innerHTML = `
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.title)}" loading="lazy">
      <div class="gallery-caption">
        <strong>${escapeHtml(image.title)}</strong>
        <span>${escapeHtml(image.categoryLabel || image.production || '')}</span>
      </div>
      <button type="button" class="gallery-download-btn" aria-label="Download ${escapeHtml(image.title)}">Download</button>
    `;
    item.querySelector('.gallery-download-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openDownloadModal(image);
    });
    item.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-download-btn')) return;
      if (typeof onOpen === 'function') onOpen();
    });
    return item;
  }

  function setupLightbox(images) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return { open() {}, close() {} };

    let current = 0;
    const imgEl = document.getElementById('lightboxImage');
    const captionEl = document.getElementById('lightboxCaption');
    const creditEl = document.getElementById('lightboxCredit');
    const downloadBtn = document.getElementById('lightboxDownload');

    function sync() {
      const image = images[current];
      if (!image) return;
      imgEl.src = image.src;
      imgEl.alt = image.title;
      if (captionEl) {
        captionEl.innerHTML = `<strong>${escapeHtml(image.title)}</strong><span>${escapeHtml(image.production || '')}</span>`;
      }
      if (creditEl) {
        creditEl.textContent = `Credit: ${image.credit || 'Contact for credit'}`;
      }
      if (downloadBtn) {
        downloadBtn.onclick = (e) => {
          e.stopPropagation();
          openDownloadModal(image);
        };
      }
    }

    function open(index) {
      current = index;
      sync();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function navigate(dir) {
      current = (current + dir + images.length) % images.length;
      sync();
    }

    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (closeBtn) closeBtn.onclick = close;
    if (prevBtn) prevBtn.onclick = () => navigate(-1);
    if (nextBtn) nextBtn.onclick = () => navigate(1);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    return { open, close, navigate };
  }

  async function loadGalleryData() {
    const response = await fetch('gallery-data.json');
    if (!response.ok) throw new Error('Could not load gallery data');
    return response.json();
  }

  global.OscarGallery = {
    loadGalleryData,
    renderGalleryCard,
    setupLightbox,
    openDownloadModal,
    escapeHtml,
  };
})(window);
