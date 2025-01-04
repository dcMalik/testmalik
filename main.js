import { fetchSections } from './fetchData.js';

async function loadSections() {
  const sections = await fetchSections();
  const container = document.getElementById('snap-container');

  if (sections.length === 0) {
    container.innerHTML = '<p>No sections available.</p>';
    return;
  }

  sections.forEach(section => {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'snap-section';
    if (section.bg_image) {
      sectionElement.style.backgroundImage = `url(${section.bg_image})`;
    } else {
      sectionElement.style.backgroundColor = section.bg_color;
    }
    sectionElement.innerHTML = `
      <h2>${section.section_name}</h2>
      <p>${section.section_content}</p>
    `;
    container.appendChild(sectionElement);
  });
}

loadSections();

document.getElementById('toggle-scroll').addEventListener('click', () => {
  const container = document.getElementById('snap-container');
  if (container.style.scrollSnapType === 'none') {
    container.style.scrollSnapType = 'y mandatory';
  } else {
    container.style.scrollSnapType = 'none';
  }
});