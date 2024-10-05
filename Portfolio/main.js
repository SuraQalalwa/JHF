const hoverEl = document.getElementById('skills');

hoverEl.addEventListener('mouseenter', function() {
    hoverEl.style.backgroundColor = 'gray';
});

hoverEl.addEventListener('mouseleave', function() {
    hoverEl.style.backgroundColor = 'white';
});

const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Fun fact";
});


const toggleSBtn = document.getElementById('toggleSBtn');
const skillsSection = document.getElementById('skills');

toggleSBtn.addEventListener('click', function() {
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none'; 
  }
});


///////
const themeSwitcher = document.getElementById('theme-switcher');
document.body.setAttribute('data-theme', 'light');

themeSwitcher.addEventListener('click', function () {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', newTheme);
});
