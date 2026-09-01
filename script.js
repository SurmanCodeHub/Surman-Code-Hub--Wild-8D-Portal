// JSON Configuration Object
const jsonConfig = {
    "brand": {
        "name": "Surman Code Hub",
        "ceo": "Vishal Kumar",
        "role": "Founder & Lead Developer",
        "taglineLogin": "Secure Vault Access",
        "taglineSignup": "Wild Node Initialization"
    },
    "forms": {
        "login": [
            { "name": "email", "type": "email", "placeholder": "Enter Commander Email", "icon": "⚡" },
            { "name": "password", "type": "password", "placeholder": "Enter Master Key", "icon": "🔑" }
        ],
        "signup": [
            { "name": "fullname", "type": "text", "placeholder": "Vishal Kumar (Lead)", "icon": "👑" },
            { "name": "email", "type": "email", "placeholder": "Enter New Node Email", "icon": "🌐" },
            { "name": "password", "type": "password", "placeholder": "Create Master Key", "icon": "🔒" },
            { "name": "secretcode", "type": "text", "placeholder": "Surman Hub Invite Code", "icon": "🚀" }
        ]
    }
};

let isLogin = true;

function renderForm() {
    const container = document.getElementById('fieldsContainer');
    const card = document.getElementById('authCard');
    const brandTagline = document.getElementById('brandTagline');
    const submitBtn = document.getElementById('submitBtn');
    const switchText = document.getElementById('switchText');

    container.innerHTML = '';
    card.className = "auth-card " + (isLogin ? "login-anim" : "signup-anim");
    
    brandTagline.innerText = isLogin ? jsonConfig.brand.taglineLogin : jsonConfig.brand.taglineSignup;
    submitBtn.innerText = isLogin ? "UNLOCK VAULT ⚡" : "LAUNCH NODE 🚀";
    
    switchText.innerHTML = isLogin 
        ? `Want to build a new node? <span onclick="toggleMode()">Signup (Wild Mode)</span>`
        : `Already running a node? <span onclick="toggleMode()">Login (Vault Mode)</span>`;

    const fields = isLogin ? jsonConfig.forms.login : jsonConfig.forms.signup;

    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'input-group';
        div.innerHTML = `
            <span class="input-icon">${field.icon}</span>
            <input type="${field.type}" name="${field.name}" placeholder="${field.placeholder}" required />
        `;
        container.appendChild(div);
    });
}

function toggleMode() {
    isLogin = !isLogin;
    renderForm();
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    alert(`[${jsonConfig.brand.name}] Success!\nMode: ${isLogin ? 'Login' : 'Signup'}\nData: ${JSON.stringify(data, null, 2)}`);
}

// Mouse Controlled 8D Parallax & Card Tilt
function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;

    const universe = document.getElementById('universe');
    const card = document.getElementById('authCard');
    const orbPink = document.getElementById('orbPink');
    const orbBlue = document.getElementById('orbBlue');

    universe.style.transform = `translate(${-x * 1.2}px, ${-y * 1.2}px) scale(1.05)`;
    orbPink.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    orbBlue.style.transform = `translate(${-x * 2}px, ${-y * 2}px)`;
    card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
}

// Initial Form Load
renderForm();