const portfolio = document.getElementById('portfolio');

class Project {
    constructor(title, image, description, link, tools) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.link = link;
        this.tools = tools;

        this.createProjectElement();
    }
    createProjectElement() {

        this.mainPart = document.createElement('div');
        this.mainPart.classList.add('projectMain');

        this.toolsPart = document.createElement('div');
        this.toolsPart.classList.add('projectTools');

        this.Pcard = document.createElement('div');
        this.Pcard.classList.add('project');

        this.Pname = document.createElement('h3');
        this.Pname.innerHTML = this.title;

        this.Pimg = document.createElement('img');
        this.Pimg.src = this.image;
        this.Pimg.alt = `image de ${this.title}`;

        this.Pdesc = document.createElement('p');
        this.Pdesc.innerHTML = this.description;

        for (let tool of this.tools) {
            this.toolImg = document.createElement('img');
            this.toolImg.src = `./src/tools/${tool}.png`;
            this.toolImg.alt = tool;

            this.toolsPart.appendChild(this.toolImg);
        }
        this.mainPart.appendChild(this.Pname);
        this.mainPart.appendChild(this.Pimg);
        this.mainPart.appendChild(this.Pdesc);

        this.Pcard.appendChild(this.mainPart);
        this.Pcard.appendChild(this.toolsPart);

        portfolio.appendChild(this.Pcard);

        this.Pcard.addEventListener('click', () => {
            window.location.href = this.link;
        });
    };
}

new Project(
    'Pokédex',
    './src/projects/pokedex.png',
    'un pokedex',
    'https://flozerty.github.io/Flokedex-JSavance/',
    ['html', 'js']
)

new Project(
    'Gaming Place',
    './src/projects/gamingplace.png',
    'un site vitrine de créateurs de jeux',
    'https://flozerty.github.io/TP-JS/',
    ['html', 'sass', 'js']

)

new Project(
    'Ace-Attorney Remaster',
    './src/projects/aceattorney.png',
    'un remaster du jeu Ace Attorney',
    'https://flozerty.github.io/ace-attorney-remaster/',
    ['js']

)

new Project(
    'Portfolio',
    './src/projects/portfolio.png',
    'Le portfolio que vous voyez ici présent!',
    'https://flozerty.github.io/portfolio/',
    ['html', 'sass', 'js']
)

new Project(
    'PlanetBodies.com',
    './src/projects/planetBodies.png',
    'Un site de référencement des satellites de notre système',
    'https://flozerty.github.io/TP-Angular/',
    ['angular', 'sass', 'ts']
)