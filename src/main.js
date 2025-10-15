import { reviews } from './Reviews.js';
import './style.css';

let currentReview = 0;

const name = document.querySelector('.name');
const job = document.querySelector('.job');
const text = document.querySelector('.text');
const img = document.querySelector('.avatar');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const randomBtn = document.querySelector('.random');

document.addEventListener('DOMContentLoaded', () => {
    showReview(currentReview);
});

nextBtn.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
});

prevBtn.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
});

randomBtn.addEventListener('click', randomReview);

function randomReview() {
    currentReview = Math.floor(Math.random() * reviews.length);
    showReview(currentReview);
}

function showReview(index) {
    const review = reviews[index];
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
    img.src = review.img;
}




