const container = document.querySelector('.container');
const signUpLink = document.querySelector('.SignUpLink');
const signInLink = document.querySelector('.SignInLink');

signUpLink.addEventListener('click', () => {
    container.classList.add('active');
});

signInLink.addEventListener('click', () => {
    container.classList.remove('active');
});