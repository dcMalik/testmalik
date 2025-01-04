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

    // Render content based on section name
    if (section.section_name.toLowerCase() === 'booking') {
      sectionElement.innerHTML = renderBookingSection(section);
    } else {
      sectionElement.innerHTML = `
        <h2>${section.section_name}</h2>
        <p>${section.section_content}</p>
      `;
    }

    container.appendChild(sectionElement);
  });
}

function renderBookingSection(section) {
  return `
    <h2>${section.section_name}</h2>
    <p>${section.section_content}</p>
    <form>
      <label for="booking-date">Select a date:</label>
      <input type="date" id="booking-date" name="booking-date">
      <button type="submit">Book Now</button>
    </form>
  `;
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