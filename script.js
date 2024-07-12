document.addEventListener('DOMContentLoaded', () => {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const keys = document.querySelectorAll('.btn');
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const toggle = document.querySelector('.toggle');
    const body = document.body;

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.value;
            const screenValue = calculatorScreen.value;

            if (keyValue === 'C') {
                calculatorScreen.value = '';
            } else if (keyValue === '=') {
                try {
                    calculatorScreen.value = eval(screenValue);
                } catch {
                    calculatorScreen.value = 'Erro';
                }
            } else if (keyValue === 'sin' || keyValue === 'cos' || keyValue === 'tan' || keyValue === 'log' || keyValue === 'exp' || keyValue === 'sqrt') {
                try {
                    calculatorScreen.value = Math[keyValue](eval(screenValue));
                } catch {
                    calculatorScreen.value = 'Erro';
                }
            } else if (keyValue === '%') {
                try {
                    calculatorScreen.value = eval(screenValue) / 100;
                } catch {
                    calculatorScreen.value = 'Erro';
                }
            } else {
                calculatorScreen.value += keyValue;
            }
        });
    });

    keys.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            if (body.classList.contains('theme-light')) {
                btn.style.opacity = '0.7';
            } else {
                btn.style.opacity = '0.7';
            }
        });

        btn.addEventListener('mouseout', () => {
            btn.style.opacity = '1';
        });
    });

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('theme-dark');
        body.classList.toggle('theme-light');

        if (body.classList.contains('theme-light')) {
            toggle.style.left = '65px';
            document.querySelectorAll('.icon').forEach(icon => {
                icon.style.color = '#ffcc29';
            });
        } else {
            toggle.style.left = '5px';
            document.querySelectorAll('.icon').forEach(icon => {
                icon.style.color = '#00adb5';
            });
        }
    });
});
