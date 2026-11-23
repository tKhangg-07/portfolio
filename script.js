document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Văn A đã load xong!');

    // 1. Dark Mode Toggle (lưu lựa chọn vào localStorage)
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark', isDark);
        if (themeToggle) {
            themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
        }
    };

    applyTheme(savedTheme === 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextIsDark = !document.body.classList.contains('dark');
            localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
            applyTheme(nextIsDark);
        });
    }

    // 2. Scroll Animation với Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target); // Hiện 1 lần rồi ngừng theo dõi
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -30px 0px',
            }
        );

        revealElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback cho trình duyệt cũ
        revealElements.forEach((el) => el.classList.add('is-visible'));
    }
});