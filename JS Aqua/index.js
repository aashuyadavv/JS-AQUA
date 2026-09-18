const business = {
	whatsapp: '919990219967',
	phone: '+919990219967',
	areas: ['Pataria', 'Nearby villages', 'Local areas'],
	process: [
		['01', 'Water Intake', 'Carefully sourced for the next stage.'], ['02', 'Multi-Stage Filtration', 'Unwanted particles are filtered out.'], ['03', 'RO Purification', 'Purified through reverse osmosis.'], ['04', 'Appropriate Water Treatment', 'Treated with the right care for drinking water.'], ['05', 'Quality Check', 'Checked before every fill.'], ['06', 'Hygienic Filling', 'Filled and handled with attention.'], ['07', 'Local Delivery', 'Delivered fresh across our local area.']
	],
	services: [
		['◒', 'Purified Drinking Water', 'Focused on providing clean and purified drinking water.'], ['✦', 'Hygiene Focus', 'Careful handling during filling and delivery.'], ['⌖', 'Local Delivery', 'Serving Pataria and nearby areas.'], ['⌂', 'Home Delivery', 'Convenient water supply for households.'], ['▦', 'Office Supply', 'Regular supply for offices and workplaces.'], ['↗', 'Bulk Orders', 'Supply for events, shops and businesses.']
	],
	reviews: [
		['Customer name', 'Locality', '“Add an honest review from a JS AQUA customer here.”'], ['Customer name', 'Nearby area', '“Add an honest review about the service and delivery here.”'], ['Customer name', 'Pataria', '“Add an honest review about the water quality here.”']
	]
};

const whatsappUrl = (message) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

document.querySelector('.contact-details').insertAdjacentHTML('afterbegin', '<div class="detail"><span>✦</span><div><small>OWNER</small><b>Aashish Yadav</b></div></div>');
document.querySelector('.footer-top > p').insertAdjacentHTML('beforeend', '<small class="footer-owner">Owned by Aashish Yadav</small>');
document.querySelector('.big-jar').outerHTML = '<img class="product-jar-photo" src="assets/20L%20jar.png" alt="JS AQUA 20 litre water jar">';

document.querySelector('#process-list').innerHTML = business.process.map(([number, title, description]) => `<article class="process-item reveal"><span class="step-no">${number}</span><h3>${title}</h3><p>${description}</p></article>`).join('');
document.querySelector('#service-list').innerHTML = business.services.map(([icon, title, description]) => `<article class="service-card reveal"><div class="mini-icon">${icon}</div><h3>${title}</h3><p>${description}</p></article>`).join('');
document.querySelector('#area-list').innerHTML = business.areas.map((area) => `<span>${area}</span>`).join('');
document.querySelector('#review-list').innerHTML = business.reviews.map(([name, locality, review], index) => `<article class="review-card reveal"><div class="stars">${index === 2 ? '☆ ☆ ☆ ☆ ☆' : '☆ ☆ ☆ ☆ ☆'}</div><p>${review}</p><small>${name} / ${locality}</small></article>`).join('');

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
	const open = navLinks.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelector('#order-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const form = new FormData(event.currentTarget);
	const message = `Hello JS AQUA, I would like to order purified drinking water.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nVillage/Locality: ${form.get('locality')}\nNumber of 20L Jars: ${form.get('jars')}\nDelivery Type: ${form.get('delivery')}\nAdditional Message: ${form.get('message') || 'None'}`;
	window.open(whatsappUrl(message), '_blank', 'noopener');
});

document.querySelectorAll('[data-product]').forEach((link) => link.addEventListener('click', () => {
	document.querySelector('#order-form textarea').value = `I would like to enquire about ${link.dataset.product}.`;
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 10), { passive: true });
