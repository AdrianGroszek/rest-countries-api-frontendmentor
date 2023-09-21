'use strict';

const countries = document.querySelector('.country-cards-section');
const bodyEl = document.querySelector('body');
const darkModeBtnImg = document.querySelector('[data-theme-icon]');
const darkModeText = document.querySelector('[data-theme-text]');

const darkModeBtn = document.querySelector('.dark-mode-btn');

async function getCountries() {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	console.log(data);
	data.forEach((country) => {
		showCountry(country);
	});
}

getCountries();

function showCountry(data) {
	const country = document.createElement('div');
	country.classList.add('card');
	country.innerHTML = `
        <div class="country-flag">
			<img
				src="${data.flags.svg}"
				class="flag-img"
			/>
		</div>
		<div class="country-info">
			<h3 class="country-name">${data.name.common}</h3>
			<p>Population: <span data-country-population>${data.population}</span></p>
			<p>Region: <span data-country-region>${data.region}</span></p>
			<p>Capital: <span data-country-capital>${
				data.capital === undefined ? '-' : data.capital
			}</span></p>
		</div>
    `;
	countries.appendChild(country);
}

function toggleDarkMode() {
	bodyEl.classList.toggle('dark-mode');

	if (bodyEl.classList == 'dark-mode') {
		darkModeBtnImg.src = '/icons/sunny-outline.svg';
		darkModeText.textContent = 'Light Mode';
	}

	if (bodyEl.classList != 'dark-mode') {
		darkModeBtnImg.src = '/icons/moon-outline.svg';
		darkModeText.textContent = 'Dark Mode';
	}
}

darkModeBtn.addEventListener('click', toggleDarkMode);
