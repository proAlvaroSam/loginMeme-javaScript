document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    const funnyEmails = [
        'seupaidecalcinha@gmail.com',
        'gatinho_sensual_2024@gmail.com',
        'princesa_do_minecraft@gmail.com',
        'hacker_das_casas_bahia@gmail.com',
        'rei_do_pix_garantido@gmail.com',
        'crush_da_nasa@gmail.com'
    ];
    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            const randomEmail = funnyEmails[Math.floor(Math.random() * funnyEmails.length)];
            
            const { value: resposta } = await Swal.fire({
                title: '🤣 ATENÇÃO! 🤣',
                html: `A senha "<b>${password}</b>" já está sendo usada pelo usuário:<br><br>` +
                      `<b>${randomEmail}</b><br><br>` +
                      `O que você gostaria de fazer?`,
                icon: 'warning',
                input: 'radio',
                inputOptions: {
                    '1': `Alterar a senha do usuário ${randomEmail}`,
                    '2': 'Hackear a conta dele',
                    '3': 'Mandar um PIX de R$ 0,01 para zoar',
                    '0': 'Sair e repensar minhas escolhas de vida'
                },
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar',
                confirmButtonColor: '#1a73e8',
                cancelButtonColor: '#d33',
                customClass: {
                    container: 'my-swal',
                    popup: 'my-swal-popup',
                    radio: 'my-swal-radio'
                },
                inputValidator: (value) => {
                    if (!value) {
                        return 'Você precisa escolher uma opção!';
                    }
                },
                width: '500px',
                didOpen: () => {
                    const radioContainer = document.querySelector('.swal2-radio');
                    if (radioContainer) {
                        radioContainer.style.display = 'flex';
                        radioContainer.style.flexDirection = 'column';
                        radioContainer.style.alignItems = 'flex-start';
                        radioContainer.style.gap = '10px';
                        radioContainer.style.marginTop = '20px';
                        radioContainer.style.marginLeft = '20px';
                        
                        const radioOptions = radioContainer.querySelectorAll('label');
                        radioOptions.forEach(label => {
                            label.style.marginLeft = '0';
                            label.style.marginRight = '0';
                            label.style.fontSize = '14px';
                            label.style.display = 'flex';
                            label.style.alignItems = 'center';
                            label.style.gap = '8px';
                            
                            const radio = label.querySelector('input');
                            if (radio) {
                                radio.style.margin = '0';
                            }
                        });
                    }
                }
            });
            
            if (resposta) {
                switch(resposta) {
                    case '1':
                        await Swal.fire({
                            title: 'Sucesso! 🥰',
                            text: 'Agora a sua senha deve funcionar no seu email!',
                            icon: 'success',
                            confirmButtonColor: '#1a73e8'
                        });
                        break;
                    case '2':
                        await Swal.fire({
                            title: 'AVISO! 🚔',
                            text: 'FBI foi notificado da sua tentativa de hackear! Em 5 minutos chega pizza.',
                            icon: 'error',
                            confirmButtonColor: '#1a73e8'
                        });
                        break;
                    case '3':
                        await Swal.fire({
                            title: 'PIX Enviado! 💰',
                            text: 'Agora você está R$ 0,01 mais pobre e continua sem conta! 🤣',
                            icon: 'success',
                            confirmButtonColor: '#1a73e8'
                        });
                        break;
                    default:
                        await Swal.fire({
                            title: 'Sábia Escolha! 😅',
                            text: 'Volte quando tiver uma senha mais criativa!',
                            icon: 'info',
                            confirmButtonColor: '#1a73e8'
                        });
                }
            }
        } else {
            await Swal.fire({
                title: 'Ops!',
                text: 'Por favor, preencha todos os campos!',
                icon: 'error',
                confirmButtonColor: '#1a73e8'
            });
        }
    });
});
