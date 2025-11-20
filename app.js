document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    /* --- ФУНКЦИОНАЛ 1: Плавный Скролл --- */

    ctaButton.addEventListener('click', function(e) {
        e.preventDefault(); // Останавливаем стандартный переход по ссылке

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Используем нативный метод браузера для плавного скролла
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    /* --- ФУНКЦИОНАЛ 2: ЭФФЕКТ ВОЛНЫ (Ripple Effect) --- */

    ctaButton.addEventListener('click', function(e) {
        // Удаляем предыдущие волны, чтобы они не накапливались
        const oldRipple = this.querySelector('.ripple');
        if (oldRipple) {
            oldRipple.remove();
        }
        
        // 1. Создаем элемент волны
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // 2. Определяем размер и позицию
        // Размеры кнопки
        const buttonRect = this.getBoundingClientRect();
        
        // Клик относительно окна
        const x = e.clientX - buttonRect.left; 
        const y = e.clientY - buttonRect.top; 

        // Вычисляем размер круга, чтобы он покрыл кнопку
        const size = Math.max(buttonRect.width, buttonRect.height);
        
        // Устанавливаем стили для круга (волна появляется в точке клика)
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;

        // 3. Добавляем элемент в кнопку
        this.appendChild(ripple);
    });

});